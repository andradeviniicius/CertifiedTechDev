#encoding:UTF-8
import random

while True: 
    aleatorio = random.randrange(1, 6)
    escolhaPc = ""
    print("1)Pedra")
    print("2)Papel")
    print("3)Tesoura")
    print("4)Lagarto")
    print("5)Spock")
    print("6)Sair do Programa")
    opcao = int(input("O que você escolhe: "))
    
    if opcao == 1:
        escolhaUsuario = "pedra"
    elif opcao == 2:
        escolhaUsuario = "papel"
    elif opcao == 3:
        escolhaUsuario = "tesoura"
    elif opcao == 4:
        escolhaUsuario = "lagarto"
    elif opcao == 5:
        escolhaUsuario = "spock"
    elif opcao == 6:
        print ("Nos vemos!")
        break
    else:
        print ("Valor Invalido")
        continue
        
    print("Tua escolha: ", escolhaUsuario)
    if aleatorio == 1:
        escolhaPc = "pedra"
    elif aleatorio == 2:
        escolhaPc = "papel"
    elif aleatorio == 3:
        escolhaPc = "tesoura"
    elif aleatorio == 4:
        escolhaPc = "lagarto"
    elif aleatorio == 5:
        escolhaPc = "spock"
    print("PC escolheu: ", escolhaPc)
    print("...")
    
    if escolhaPc == "pedra" and escolhaUsuario == "papel" or "spock":
        print(f"Ganhou, {escolhaUsuario} cobre pedra")
        break

    elif escolhaPc == "papel" and escolhaUsuario == "tesoura" or "lagarto":
        print(f"Ganhou, {escolhaUsuario} corta papel")
        break

    elif escolhaPc == "tesoura" and escolhaUsuario == "pedra" or "lagarto":
        print(f"Ganhou, {escolhaUsuario} amassa tesoura")
        break

    elif escolhaPc == "lagarto" and escolhaUsuario == "spock" or "papel":
        print(f"Ganhou, {escolhaUsuario} amassass lagarto")
        break
    elif escolhaPc == "spock" and escolhaUsuario == "papel" or "lagarto":
        print(f"Ganhou, {escolhaUsuario} amassa spock")
        break



    if escolhaUsuario == "pedra" and escolhaPc == "papel" or "spock":
        print(f"Perdeu, {escolhaPc} cobre pedra")
        break

    elif escolhaUsuario == "papel" and escolhaPc == "tesoura" or "lagarto":
        print(f"Perdeu, {escolhaPc} corta papel")
        break

    elif escolhaUsuario == "tesoura" and escolhaPc == "pedra" or "spock":
        print(f"Perdeu, {escolhaPc} amassa tesoura")
        break

    elif escolhaUsuario == "lagarto" and escolhaPc == "tesoura" or "pedra":
        print(f"Perdeu, {escolhaPc} amassa lagarto")
        break

    elif escolhaUsuario == "spock" and escolhaPc == "papel" or "lagarto":
        print(f"Perdeu, {escolhaPc} amassa spock")
        break


    elif escolhaPc == escolhaUsuario:
        print("Empate")

    again = input("Jogar novamente? s/n: ")
    
    
    
    if 's' in again:
        continue
    elif 'n' in again:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")