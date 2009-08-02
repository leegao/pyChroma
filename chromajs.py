import os
def js(file):
    h = open(file)
    r = h.read()
    h.close()
    return r

chroma_js = js('chroma.js')
md5_js = js('md5.js')
sha_js = js('sha.js')

