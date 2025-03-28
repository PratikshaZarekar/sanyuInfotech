import { Component } from '@angular/core';

@Component({
  selector: 'app-mou',
  templateUrl: './mou.component.html',
  styleUrls: ['./mou.component.css']
})
export class MouComponent {

  activeIndex: number | null = null; // Only one image should be open at a time

  mouList = [
    { title: "MOU Done with Pro - Vice Chancellor Dr Ramchandra Pujeri Sir at MIT ADT University Loni Kalbhor Campus, Pune", image: "assets/images/MIT_Photo1.jpg",expanded:false },
    { title: "MOU done With Principal Dr Sayyad sir at Ajeenkya DY Patil School of Engineering, Lohagaon", image: "assets/images/Ajeenkya_DY_Patil.jpg",expanded:false  },
    { title: "MOU done with PVG Engineering College, Pune", image: "assets/images/PVG_Engineering.jpg",expanded:false },
    { title: "MOU done with Principal Sir & TPO Mr Shrikant Patil Sir at JSPM Engineering College, Narhe", image: "assets/images/JSPM_Engineering.jpg",expanded:false },
    { title: "MOU done With Principal Dr Milind Rohokale sir at SKN Sinhgad Institute of Technology & Science, Lonavala", image: "assets/images/Sinhgad_Institute_of_Technology.jpg",expanded:false },
    { title: "MOU done with Dr Banmote sir principal, Dean TPO Dr Nikku Khalsa sir and prof Ram Meghe Institute of Technology and Research BADNERA, Amaravati", image: "assets/images/Ram_Meghe_institute.jpg" ,expanded:false},
    { title: "MOU done With Principal Dr Sachin Babar sir at Sinhgad Institute of Technology, Lonavala", image: "assets/images/Sinhgad_Institute.jpg",expanded:false },
    { title: "MOU done with Dr Thakare sir, TPO at Sipna College of Engineering, Amaravati", image: "assets/images/Sipna_College.jpg",expanded:false },
    { title: "MOU done with principal sir and TPO Mr. Manwar sir Takshshila Institute of Engineering and Technology, Darapur", image: "assets/images/Takshshila _Institute.jpg",expanded:false },
    { title: "MOU done with Dr Sagar Jirapure sir principal Rajendra Gode Institute of Technology and Research", image: "assets/images/Rajendra_Gode_Institute.jpg",expanded:false },
    { title: "MOU done with principal Dr Harkut sir, TPO Dr. Thorat sir and prof Ram Meghe College of Engineering and management Badnera, Amaravati", image: "assets/images/Ram_Meghe_College_of_engineering.jpg",expanded:false },
  ];

  toggleImage(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;// Close if same image, otherwise open new one
  } 

  

 
}