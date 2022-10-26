interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}


interface IAction extends ISwim, IFly {       //支持多接口继承，接口中有的都得有

}

const action: IAction = {
  swimming() {

  },
/*   flying() {
    
  } */
}

