        var controls = {
        colors() {
            color1 = document.querySelector(".color1").addEventListener("click", () => {
                document.querySelector("#background").style.background = "rgb(113, 89, 193)"
              }),
   
           color2 = document.querySelector(".color2").addEventListener("click", () => {
               document.querySelector("#background").style.background = "#e9ebee"
           }),
   
           color3 = document.querySelector(".color3").addEventListener("click", () => {
               document.querySelector("#background").style.background = "#3b5998"
           })
   
        },
        fontStyle() {
            fontitalic = document.querySelector("#font1").addEventListener("click", () => {
                document.querySelector("#background").style.fontStyle = "italic"
            }),

            fontnormal = document.querySelector("#font2").addEventListener("click", () => {
                document.querySelector("#background").style.fontStyle = "normal"
            }),

            fontoblique = document.querySelector("#font3").addEventListener("click", () => {
                document.querySelector("#background").style.fontStyle = "oblique"
            })
        },
        fontSize() {
            size20pt = document.querySelector("#font4").addEventListener("click", () => {
                document.querySelector("#background").style.fontSize = "20pt"
            }),

            size30pt = document.querySelector("#font5").addEventListener("click", () => {
                document.querySelector("#background").style.fontSize = "30pt"
            }),

            size40pt = document.querySelector("#font6").addEventListener("click", () => {
                document.querySelector("#background").style.fontSize = "40pt"
            })
        },
        fontWeight() {
            fontweight600 = document.querySelector("#font7").addEventListener("click", () => {
                document.querySelector("#background").style.fontWeight = "600"
            }),

            fontweight700 = document.querySelector("#font8").addEventListener("click", () => {
                document.querySelector("#background").style.fontWeight = "700"
            }),

            fontweight800 = document.querySelector("#font9").addEventListener("click", () => {
                document.querySelector("#background").style.fontWeight = "800"
            })
        },
        fontColor() {
            fontColorBlack = document.querySelector("#font10").addEventListener("click", () => {
                document.querySelector("#background").style.color = "black"
            }),

            fontColorWhite = document.querySelector("#font11").addEventListener("click", () => {
                document.querySelector("#background").style.color = "white"
            }),

            fontColorRed = document.querySelector("#font12").addEventListener("click", () => {
                document.querySelector("#background").style.color = "red"
            })
        }
        
    }
   
function colors(){
    controls.colors()
    controls.fontStyle()
    controls.fontSize()
    controls.fontWeight()
    controls.fontColor()
}

colors()


