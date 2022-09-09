export class sideBarOption {
  sidebarName!:string;
  sidebarValue!:string;
  imgLink!:string;
  imgAlt!:string;


	constructor(sBN:string,sBV:string,iL:string,iA:string) {
        this.sidebarName = sBN;
        this.sidebarValue=sBV;
        this.imgLink = iL;
        this.imgAlt = iA;
	}

}
