import smtplib
# establecer conexion con el servidor de correo

conexion = smtplib.SMTP(host= 'smtp.gmail.com',port=587)
conexion.ehlo()

#Encriptacion TLS
conexion.starttls()

#Iniciar session en el servidor
conexion.login(user='hamburgueseriavisual@gmail.com', password='')

# Enviar el mensaje
asunto = 'Comentario Web  Hamburguesas'
cuerpo=' Esto es una prueba'
mensaje = f'Subject: {asunto}\n\n{cuerpo}'


conexion.sendmail(from_addr='hamburgueseriavisual@gmail.com', to_addrs='edisonjef@gmail.com',msg= mensaje)

# desconectarnos del servidor
conexion.quit()
