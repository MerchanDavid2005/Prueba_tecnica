Texto = ""

Diccionario = {}

for Letras in Texto.replace(" ", ""):

    ConteoDeLetras = Texto.count(Letras) # Variable para contar el numero de caracteres

    Diccionario.update({Letras: ConteoDeLetras})

print(Diccionario)