from Chroma import chroma

colors = chroma("sha1$a1976$a36cc8cbf81742a8fb52e221aaeab48ed7f58ab4", alg = "SHA", backend = "django")

print colors.javascript
print colors
