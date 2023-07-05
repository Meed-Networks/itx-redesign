export const prices = {
     residential : [
          {
               name: "Night and Weekend plan",
               speed: "2Mb",
               maxSpeed: "4Mb",
               price: '10,750'
          },
          {
               name: "Family Mini",
               speed: "3Mb",
               maxSpeed: "7Mb",
               price: '16,250'
          },
          {
               name: "Family Max",
               speed: "4Mb",
               maxSpeed: "10Mb",
               price: '25,500'
          },
     ],
     corporate : [
          {
               name: "Bronze",
               speed: "3Mb",
               maxSpeed: "",
               price: '32,250'
          },
          {
               name: "Silver",
               speed: "4Mb",
               maxSpeed: "",
               price: '60,000'
          },
          {
               name: "Gold",
               speed: "6Mb",
               maxSpeed: "",
               price: '70,250'
          },
          {
               name: "Diamond",
               speed: "8Mb",
               maxSpeed: "",
               price: '98,000'
          },
          {
               name: "Platinum",
               speed: "10Mb",
               maxSpeed: "",
               price: '115,000'
          },
          {
               name: "Platinum+",
               speed: "12Mb",
               maxSpeed: "",
               price: '122,500'
          },
     ]
}
export interface IPrice {
     name: string,
     speed: string,
     maxSpeed: string,
     price: string
}

export const properties =  [
     'Unlimited download',
     'High speed broadband',
     'Instant access',
     'Unlimited',
     'Affordable data plan'
]
