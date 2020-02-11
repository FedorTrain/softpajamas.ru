from tkinter import *
from random import randint

HEIGHT = 600
WIDTH = 900
g = 40
v = 0
t = 0.1
f = []
speed_f = -5
time_f = 50


root = Tk()
canv = Canvas(root, height = HEIGHT, width = WIDTH, bg='#006600')
canv.pack()


pl = canv.create_rectangle(30, 500, 40, 490, fil = 'white')
line = canv.create_line(0, 500, 900, 500)

def create_f():
    global time_f
    time_f -= 1;
    if time_f == 0:
        time_f = 50
        f.append(canv.create_rectangle(1000, 500, 1010, 450, fil = 'blue'))

def move_pl():
    global v
    v = v - g * t
    s = v * t - g * t*t / 2
    if (canv.coords(pl)[1] > 500):
        canv.coords(pl)[1] = 500
    if not(canv.coords(pl)[1] >= 500 and v < 0):
        canv.move(pl, 0, -s)



def move_f():
    for i in f:
        canv.move(i, speed_f, 0)

def key_check(event):
    global v
    if event.keysym == "space" and canv.coords(pl)[1] >= 500:
        v = 100

canv.bind("<KeyPress>", key_check)
canv.focus_set()

def main():
    move_pl()
    create_f()
    move_f()
    root.after(30, main)

main();

root.mainloop();
