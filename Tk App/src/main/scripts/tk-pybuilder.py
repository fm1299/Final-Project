#!/usr/bin/env python
import sys
from tkinter import *
from tkinter import ttk
root = Tk()
frm = ttk.Frame(root, padding=10)
frm.grid()
ttk.Label(frm, text="Hello World from:").grid(column=1, row=0)
ttk.Label(frm, text="Josue Sumare").grid(column=1, row=1)
ttk.Label(frm, text="Roy Choquehuanca").grid(column=1, row=2)
ttk.Label(frm, text="Angie Pino").grid(column=1, row=3)
ttk.Label(frm, text="Fabrizio Mattos").grid(column=1, row=4)
ttk.Label(frm, text="Uberto Garcia").grid(column=1, row=5)
ttk.Button(frm, text="Quit", command=root.destroy).grid(column=1, row=8)
root.mainloop()
#sys.stdout.write('Hello from my script!\n')