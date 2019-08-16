from flask import Flask, render_template, request
from send_mail import send_mail

app = Flask(__name__)

ENV = 'dev'

if ENV == 'dev':
    app.debug = True

else:
    app.debug = False


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/', methods=['POST'])
def submit():
    if request.method == 'POST':
        customer = request.form['customer']
        email = request.form['email']
        rating = request.form['rating']
        comments = request.form['comments']
        # print(customer, rating, comments)
        if customer == '' or comments == '' or rating == '':
            return render_template('index.html', message='Please enter require fields')
        send_mail(customer, email, rating, comments)
        return render_template('index.html', message='Thanks for your feedback')


if __name__ == '__main__':
    app.run()
