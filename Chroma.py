import md5

class chroma():
    """
        @author: Lee Gao
        @contact: http://6.dot.ch/
        @note:
            This is a re-implementation of mattt*'s Chroma-Hash calculator.
            http://mattt.me/2009/07/chroma-hash-a-belated-introduction/
        @param param: 
            password: The password to chroma-hash
            default: The number of colors to return
            _hash: If the password is already hashed by another algorithm or is
                already a MD5 hash, then the _hash function (which takes only one parameter)
                will return a MD5 compatible hash
                SHA1 will be implemented when mattt decides to update his Chroma-Hash specs
        @return: 
            chroma object with 1-4 HTML color items.
        @ivar ivar:
            chroma.colors - array of the chroma-hashed colors
        Example:    
            from Chroma import chroma
            myColors = chroma("password")
    """
    colors = []
    def __init__(self, password, default = 3, _hash = None):
        if default > 4: default = 4;
        if not _hash:
            hash = md5.new(password).hexdigest()
        else:
            hash = _hash(password)
        for c in range(default):
            self.colors.append("#"+hash[c*6:(c+1)*6])
    def __repr__(self):
        return 'Colors:%s' %(self.colors)
    def __len__(self):
        return len(self.colors)
    def __iter__(self):
        return iter(self.colors)
    def __getitem__(self, key):
        return self.colors[key]
    