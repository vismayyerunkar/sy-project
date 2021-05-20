from django.core.mail import EmailMessage
from django.conf import settings
import threading



SECRET_KEY = 't$7&^_c)81n&nw9-%om^!9o+*=fijya-h5a#+&@*f@tkt^gvmp'


class EmailThread(threading.Thread):

    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)

    def run(self):
        self.email.send()


class Util:
    @staticmethod
    def send_email(data):
        email = EmailMessage(
            subject=data['email_subject'], body=data['email_body'], to=[data['to_email']])
        # EmailThread(email).start()

        email.fail_silently = False
        email.send()
       



