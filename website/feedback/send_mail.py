import smtplib
from email.mime.text import MIMEText


def send_mail(customer, email, rating, comments):
    port = 2525
    smtp_server = ''
    login = ''
    password = ''
    message = f""

    sender_email = ''
    receiver_email = ""
    msg = MIMEText(message, 'html')
    msg['Subject'] = f"{customer} -- Blahdns feedback"
    msg['From'] = ''
    msg['To'] = ''

# Send email
    with smtplib.SMTP(smtp_server, port) as server:
        server.login(login, password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
