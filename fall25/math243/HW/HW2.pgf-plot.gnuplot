set table "HW2.pgf-plot.table"; set format "%.5f"
set samples 400.0; plot [x=-3.2:3.2] 10*(x-1)*(x+2)*(x+3)/exp(x/1.4+4)
