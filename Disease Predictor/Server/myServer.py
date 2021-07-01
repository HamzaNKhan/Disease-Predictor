# -*- coding: utf-8 -*-
"""
Created on Tue Dec  8 16:18:16 2020

@author: Nadeem Khan
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
from io import BytesIO
import pickle
import numpy as np


class helloHandler(BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        """ Sets headers required for CORS """
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "x-api-key,Content-Type")

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_GET(self):
        self.send_response(200)
        self._send_cors_headers()
        self.send_header('content-type', 'text/html')
        self.end_headers()

        f = open("json_Headers.txt", "r")
        # self.wfile.write(f.read().encode())

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        self.send_response(200)
        self._send_cors_headers()
        body = self.rfile.read(content_length)
        self.send_response(200)
        self.end_headers()

        def ifNoDisease():
            return "No Disease Found"

        Yts = ifNoDisease()
        print(Yts)

        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        response = BytesIO()

        response.write(b'This is POST request. ')
        response.write(b'Received: ')
        # response.write(body)
        self.wfile.write(response.getvalue())
        self.wfile.write(Yts.encode('utf-8'))


def main():
    PORT = 3000
    server = HTTPServer(('', PORT), helloHandler)
    print('Server is running of port:', PORT)
    server.serve_forever()


if __name__ == '__main__':
    main()
