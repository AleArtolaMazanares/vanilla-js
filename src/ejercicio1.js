let contador = {
  valor1: 0,

  siguiente: function () {
    this.valor1 += 1;
    return this.valor1;
  },
};

export { contador };
