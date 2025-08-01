export interface SalesData {
  month: string;
  sales: number;
}

export interface FilterOptions {
  categories: string[];
  products: string[];
  brands: string[];
}

// Fixed months for all data
export const months = ["Janeiro", "Fevereiro", "Março", "Abril"];

// Comprehensive data structure with specific sales data for each filter combination
export const comprehensiveSalesData: Record<string, Record<string, Record<string, number[]>>> = {
  "Comida": {
    "Fruta": {
      "Frutas3": [150, 480, 320, 280],
      "VerdurasPlus": [220, 390, 450, 310],
      "CarnesFrescas": [180, 420, 380, 290],
      "PescadoDelMar": [200, 350, 410, 330],
      "LácteosNatural": [160, 440, 360, 270],
      "PanArtesanal": [190, 400, 390, 300],
      "CerealesSalud": [170, 430, 370, 285]
    },
    "Verdura": {
      "Frutas3": [140, 460, 340, 260],
      "VerdurasPlus": [210, 380, 460, 320],
      "CarnesFrescas": [170, 410, 390, 280],
      "PescadoDelMar": [190, 360, 420, 340],
      "LácteosNatural": [150, 450, 370, 260],
      "PanArtesanal": [180, 410, 400, 290],
      "CerealesSalud": [160, 440, 380, 275]
    },
    "Carne": {
      "Frutas3": [130, 470, 330, 270],
      "VerdurasPlus": [200, 390, 470, 330],
      "CarnesFrescas": [160, 420, 400, 290],
      "PescadoDelMar": [180, 370, 430, 350],
      "LácteosNatural": [140, 460, 380, 280],
      "PanArtesanal": [170, 420, 410, 300],
      "CerealesSalud": [150, 450, 390, 285]
    },
    "Pescado": {
      "Frutas3": [145, 465, 335, 265],
      "VerdurasPlus": [215, 385, 465, 325],
      "CarnesFrescas": [175, 415, 395, 285],
      "PescadoDelMar": [195, 365, 425, 345],
      "LácteosNatural": [155, 455, 375, 275],
      "PanArtesanal": [185, 415, 405, 295],
      "CerealesSalud": [165, 445, 385, 280]
    },
    "Lácteos": {
      "Frutas3": [135, 475, 325, 275],
      "VerdurasPlus": [205, 395, 475, 335],
      "CarnesFrescas": [165, 425, 405, 295],
      "PescadoDelMar": [185, 375, 435, 355],
      "LácteosNatural": [145, 465, 385, 285],
      "PanArtesanal": [175, 425, 415, 305],
      "CerealesSalud": [155, 455, 395, 290]
    },
    "Pão": {
      "Frutas3": [125, 485, 315, 285],
      "VerdurasPlus": [195, 405, 485, 345],
      "CarnesFrescas": [155, 435, 415, 305],
      "PescadoDelMar": [175, 385, 445, 365],
      "LácteosNatural": [135, 475, 395, 295],
      "PanArtesanal": [165, 435, 425, 315],
      "CerealesSalud": [145, 465, 405, 300]
    },
    "Cereais": {
      "Frutas3": [155, 445, 355, 245],
      "VerdurasPlus": [225, 365, 445, 305],
      "CarnesFrescas": [185, 395, 425, 275],
      "PescadoDelMar": [205, 345, 455, 325],
      "LácteosNatural": [165, 445, 405, 255],
      "PanArtesanal": [195, 405, 435, 285],
      "CerealesSalud": [175, 435, 415, 270]
    }
  },
  "Bebidas": {
    "Fruta": {
      "Frutas3": [120, 520, 280, 320],
      "VerdurasPlus": [190, 430, 520, 360],
      "CarnesFrescas": [150, 460, 480, 340],
      "PescadoDelMar": [170, 410, 540, 380],
      "LácteosNatural": [130, 500, 440, 320],
      "PanArtesanal": [160, 460, 500, 360],
      "CerealesSalud": [140, 490, 460, 340]
    },
    "Verdura": {
      "Frutas3": [110, 530, 270, 330],
      "VerdurasPlus": [180, 440, 530, 370],
      "CarnesFrescas": [140, 470, 490, 350],
      "PescadoDelMar": [160, 420, 550, 390],
      "LácteosNatural": [120, 510, 450, 330],
      "PanArtesanal": [150, 470, 510, 370],
      "CerealesSalud": [130, 500, 470, 350]
    },
    "Carne": {
      "Frutas3": [100, 540, 260, 340],
      "VerdurasPlus": [170, 450, 540, 380],
      "CarnesFrescas": [130, 480, 500, 360],
      "PescadoDelMar": [150, 430, 560, 400],
      "LácteosNatural": [110, 520, 460, 340],
      "PanArtesanal": [140, 480, 520, 380],
      "CerealesSalud": [120, 510, 480, 360]
    },
    "Pescado": {
      "Frutas3": [115, 525, 275, 325],
      "VerdurasPlus": [185, 435, 525, 365],
      "CarnesFrescas": [145, 465, 485, 345],
      "PescadoDelMar": [165, 415, 545, 385],
      "LácteosNatural": [125, 505, 445, 325],
      "PanArtesanal": [155, 465, 505, 365],
      "CerealesSalud": [135, 495, 465, 345]
    },
    "Lácteos": {
      "Frutas3": [105, 535, 265, 335],
      "VerdurasPlus": [175, 445, 535, 375],
      "CarnesFrescas": [135, 475, 495, 355],
      "PescadoDelMar": [155, 425, 555, 395],
      "LácteosNatural": [115, 515, 455, 335],
      "PanArtesanal": [145, 475, 515, 375],
      "CerealesSalud": [125, 505, 475, 355]
    },
    "Pão": {
      "Frutas3": [95, 545, 255, 345],
      "VerdurasPlus": [165, 455, 545, 385],
      "CarnesFrescas": [125, 485, 505, 365],
      "PescadoDelMar": [145, 435, 565, 405],
      "LácteosNatural": [105, 525, 465, 345],
      "PanArtesanal": [135, 485, 525, 385],
      "CerealesSalud": [115, 515, 485, 365]
    },
    "Cereais": {
      "Frutas3": [135, 505, 295, 305],
      "VerdurasPlus": [205, 415, 505, 345],
      "CarnesFrescas": [165, 445, 475, 325],
      "PescadoDelMar": [185, 395, 535, 365],
      "LácteosNatural": [145, 495, 435, 305],
      "PanArtesanal": [175, 455, 495, 345],
      "CerealesSalud": [155, 485, 455, 325]
    }
  },
  "Electrônicos": {
    "Fruta": {
      "Frutas3": [180, 380, 420, 240],
      "VerdurasPlus": [250, 290, 380, 280],
      "CarnesFrescas": [210, 320, 340, 260],
      "PescadoDelMar": [230, 270, 400, 300],
      "LácteosNatural": [190, 360, 380, 240],
      "PanArtesanal": [220, 320, 360, 280],
      "CerealesSalud": [200, 350, 340, 260]
    },
    "Verdura": {
      "Frutas3": [170, 390, 410, 250],
      "VerdurasPlus": [240, 300, 390, 290],
      "CarnesFrescas": [200, 330, 350, 270],
      "PescadoDelMar": [220, 280, 410, 310],
      "LácteosNatural": [180, 370, 390, 250],
      "PanArtesanal": [210, 330, 370, 290],
      "CerealesSalud": [190, 360, 350, 270]
    },
    "Carne": {
      "Frutas3": [160, 400, 400, 260],
      "VerdurasPlus": [230, 310, 400, 300],
      "CarnesFrescas": [190, 340, 360, 280],
      "PescadoDelMar": [210, 290, 420, 320],
      "LácteosNatural": [170, 380, 400, 260],
      "PanArtesanal": [200, 340, 380, 300],
      "CerealesSalud": [180, 370, 360, 280]
    },
    "Pescado": {
      "Frutas3": [175, 385, 415, 245],
      "VerdurasPlus": [245, 295, 385, 285],
      "CarnesFrescas": [205, 325, 345, 265],
      "PescadoDelMar": [225, 275, 405, 305],
      "LácteosNatural": [185, 365, 385, 245],
      "PanArtesanal": [215, 325, 365, 285],
      "CerealesSalud": [195, 355, 345, 265]
    },
    "Lácteos": {
      "Frutas3": [165, 395, 405, 255],
      "VerdurasPlus": [235, 305, 395, 295],
      "CarnesFrescas": [195, 335, 355, 275],
      "PescadoDelMar": [215, 285, 415, 315],
      "LácteosNatural": [175, 375, 395, 255],
      "PanArtesanal": [205, 335, 375, 295],
      "CerealesSalud": [185, 365, 355, 275]
    },
    "Pão": {
      "Frutas3": [155, 405, 395, 265],
      "VerdurasPlus": [225, 315, 405, 305],
      "CarnesFrescas": [185, 345, 365, 285],
      "PescadoDelMar": [205, 295, 425, 325],
      "LácteosNatural": [165, 385, 405, 265],
      "PanArtesanal": [195, 345, 385, 305],
      "CerealesSalud": [175, 375, 365, 285]
    },
    "Cereais": {
      "Frutas3": [195, 365, 435, 225],
      "VerdurasPlus": [265, 275, 365, 265],
      "CarnesFrescas": [225, 305, 325, 245],
      "PescadoDelMar": [245, 255, 385, 285],
      "LácteosNatural": [205, 345, 365, 225],
      "PanArtesanal": [235, 305, 345, 265],
      "CerealesSalud": [215, 335, 325, 245]
    }
  },
  "Roupa": {
    "Fruta": {
      "Frutas3": [200, 360, 440, 220],
      "VerdurasPlus": [270, 270, 360, 260],
      "CarnesFrescas": [230, 300, 320, 240],
      "PescadoDelMar": [250, 250, 380, 280],
      "LácteosNatural": [210, 340, 360, 220],
      "PanArtesanal": [240, 300, 340, 260],
      "CerealesSalud": [220, 330, 320, 240]
    },
    "Verdura": {
      "Frutas3": [190, 370, 430, 230],
      "VerdurasPlus": [260, 280, 370, 270],
      "CarnesFrescas": [220, 310, 330, 250],
      "PescadoDelMar": [240, 260, 390, 290],
      "LácteosNatural": [200, 350, 370, 230],
      "PanArtesanal": [230, 310, 350, 270],
      "CerealesSalud": [210, 340, 330, 250]
    },
    "Carne": {
      "Frutas3": [180, 380, 420, 240],
      "VerdurasPlus": [250, 290, 380, 280],
      "CarnesFrescas": [210, 320, 340, 260],
      "PescadoDelMar": [230, 270, 400, 300],
      "LácteosNatural": [190, 360, 380, 240],
      "PanArtesanal": [220, 320, 360, 280],
      "CerealesSalud": [200, 350, 340, 260]
    },
    "Pescado": {
      "Frutas3": [195, 365, 445, 215],
      "VerdurasPlus": [265, 275, 365, 255],
      "CarnesFrescas": [225, 305, 325, 235],
      "PescadoDelMar": [245, 255, 385, 275],
      "LácteosNatural": [205, 345, 365, 215],
      "PanArtesanal": [235, 305, 345, 255],
      "CerealesSalud": [215, 335, 325, 235]
    },
    "Lácteos": {
      "Frutas3": [185, 375, 435, 225],
      "VerdurasPlus": [255, 285, 375, 265],
      "CarnesFrescas": [215, 315, 335, 245],
      "PescadoDelMar": [235, 265, 395, 285],
      "LácteosNatural": [195, 355, 375, 225],
      "PanArtesanal": [225, 315, 355, 265],
      "CerealesSalud": [205, 345, 335, 245]
    },
    "Pão": {
      "Frutas3": [175, 385, 425, 235],
      "VerdurasPlus": [245, 295, 385, 275],
      "CarnesFrescas": [205, 325, 345, 255],
      "PescadoDelMar": [225, 275, 405, 295],
      "LácteosNatural": [185, 365, 385, 235],
      "PanArtesanal": [215, 325, 365, 275],
      "CerealesSalud": [195, 355, 345, 255]
    },
    "Cereais": {
      "Frutas3": [215, 345, 465, 195],
      "VerdurasPlus": [285, 255, 345, 235],
      "CarnesFrescas": [245, 285, 305, 215],
      "PescadoDelMar": [265, 235, 365, 255],
      "LácteosNatural": [225, 325, 345, 195],
      "PanArtesanal": [255, 285, 325, 235],
      "CerealesSalud": [235, 315, 305, 215]
    }
  }
};

export const filterOptions: FilterOptions = {
  categories: ["Comida", "Bebidas", "Electrônicos", "Roupa"],
  products: ["Fruta", "Verdura", "Carne", "Pescado", "Lácteos", "Pão", "Cereais"],
  brands: ["Frutas3", "VerdurasPlus", "CarnesFrescas", "PescadoDelMar", "LácteosNatural", "PanArtesanal", "CerealesSalud"]
}; 