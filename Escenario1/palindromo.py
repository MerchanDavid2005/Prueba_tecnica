def Palindromo(Palabra):

    Palabra = Palabra.replace(" ", "").replace(",", "").replace(".", "").lower() # Texto convertido

    if Palabra[::-1] == Palabra:

        return True
    
    else:

        return False

print(Palindromo("radar"))