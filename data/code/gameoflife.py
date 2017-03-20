import gi
import numpy as np
import sys

gi.require_version('Gtk', '3.0')
from gi.repository import Gtk
from gi.repository import GLib

def vida(mapa,factorvida):
    for i in range(len(mapa)):
        for j in range(len(mapa[i])):
            randomnumber = np.random.rand()
            if randomnumber > factorvida:
                mapa[i][j] = 1
            else:
                mapa[i][j] = 0

def checkboundaries(mapa,x,y):
    veins= 0
    for i in range(-1,2):
        for j in range(-1,2):
            if i == 0 and j == 0:
                pass
            else:
                vei = mapa[x+i][y+j]
                veins = veins + vei 
    return veins

def comprovarvida(mapa,i,j):
    veinspropers = checkboundaries(mapa,i,j)
    if veinspropers > 3 or veinspropers < 2:
        return 0
    if veinspropers == 3:
        return 1
    if veinspropers == 2:
        return mapa[i][j]

def reproductor(mapa):
    oldMapa = mapa
    mapa = np.zeros((len(mapa),len(mapa)))

    for i in range(len(oldMapa)-1):
        for j in range(len(oldMapa[i])-1):
            mapa[i][j] = comprovarvida(oldMapa,i,j)
            
    return mapa


class GameOfLife(Gtk.Window):

    def __init__(self):
        Gtk.Window.__init__(self, title="El Xoc es un Bon Gos")
        Gtk.Window.set_default_size(self, 400,400)

        reproduir = Gtk.Button(label="Saltar")
        reproduir.connect("clicked", self.saltar)
        
        random = Gtk.Button(label="Randomitzar")
        random.connect("clicked", self.randomitzar)
        
        reproduccio = Gtk.ToggleButton(label="Reproduir")
        reproduccio.connect("toggled", self.reproduir)
        
        borrar = Gtk.Button(label="Reset")
        borrar.connect("clicked", self.delete)
        
        vbox = Gtk.VBox()
        box = Gtk.Box()
        box.add(reproduir)
        box.add(random)
        box.add(reproduccio)
        box.add(borrar)
        vbox.pack_start(box, False, False, 2)
        
        self.grid = Gtk.Grid()
        vbox.pack_end(self.grid, True, True, 2)
        self.add(vbox)

    def setGrid(self, x, y):
        self.x = x
        self.y = y
        self.mapa = np.zeros((x,y))
        for i in range(x):
            for j in range(y):
                button = Gtk.ToggleButton(label="")
                button.connect("toggled", self.clickCella, j,i)
                self.grid.attach(button, j,i,1,1)
                
    def setVida(self, v):
        self.vida = v
        
    def setVelocitat(self, v):
        self.velo = v
        
    def clickCella(self, boto, i, j):
        if boto.get_active():
            self.mapa[i][j] = 1
        else:
            self.mapa[i][j] = 0
            
    def calcular(self):
        self.mapa = reproductor(self.mapa)
        for i in range(len(self.mapa)):
            for j in range(len(self.mapa)):
                boto = self.grid.get_child_at(i,j)
                if self.mapa[i][j] == 1:    
                    boto.set_active(True)
                else:
                    boto.set_active(False)
            
    def randomitzar(self, boto):
        vida(self.mapa, self.vida)
        for i in range(len(self.mapa)):
            for j in range(len(self.mapa)):
                boto = self.grid.get_child_at(i,j)
                if self.mapa[i][j] == 1:    
                    boto.set_active(True)
                else:
                    boto.set_active(False)
        
    def reproduir(self, boto):
        if boto.get_active():
            self.calcular()
            GLib.timeout_add(self.velo, self.reproduir, boto)
        
    def saltar(self, boto):
        self.calcular()
    
    def delete(self, boto):
        self.mapa = np.zeros((self.x, self.y))
        for i in range(len(self.mapa)):
            for j in range(len(self.mapa)):
                boto = self.grid.get_child_at(i,j)
                if self.mapa[i][j] == 1:    
                    boto.set_active(True)
                else:
                    boto.set_active(False)



def main(args):
	for i in range(len(args)):
		if i == 0:
			x = 30
			y = 30
			vida=0.75
			velocitat=150
		elif i == 1:
			x = int(args[i])
		elif i == 2:
			y = int(args[i])
		elif i == 3:
			vida = 1-float(args[i])
		elif i == 4:
			velocitat = int(args[i])

	gof = GameOfLife()
	gof.setGrid(x, y)
	gof.setVida(vida)
	gof.setVelocitat(velocitat)
	gof.connect("delete-event", Gtk.main_quit)
	gof.show_all()

	Gtk.main()

if __name__=='__main__':
    sys.exit(main(sys.argv))