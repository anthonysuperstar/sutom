let mots = "roulera rouleur roulier rouliez rouloir roulons roulure roulées roumain roupies rouquin rousses roussie roussin roussir roussis roussit roussît roustie roustir roustis roustit roustît routage routais routait routant routard routent routera routier routiez routine routons routées rouvert rouvres rouvrez rouvrir rouvris rouvrit rouvrue rouvrus rouvrît rouâmes rouâtes rouîmes rouîtes rowings royales royaume royauté ruaient ruasses rubanai rubanas rubaner rubanes rubanez rubanât rubanée rubanés rubiacé rubican rubéfia rubéfie rubéfié rubéole ruchais ruchait ruchant ruchent ruchera ruchers ruchiez ruchons ruchées rudenta rudente rudenté rudesse rudoies rudoyai rudoyas rudoyer rudoyez rudoyât rudoyée rudoyés rudéral ruelles ruerais ruerait rueriez ruerons rueront ruffian rufians rugirai rugiras rugirez rugisse rugueux rugîmes rugîtes ruilais ruilait ruilant ruilent ruilera ruiliez ruilons ruilées ruinais ruinait ruinant ruinent ruinera ruineux ruiniez ruinons ruinure ruinées rumeurs ruminai ruminas ruminer rumines ruminez ruminât ruminée ruminés rupinai rupinas rupiner rupines rupinez rupinât rupteur rupture rurales rusasse ruserai ruseras ruserez rusions russule rustaud rustine rustres rusâmes rusâtes rutilai rutilas rutiler rutiles rutilez rutilât ruèrent rythmai rythmas rythmer rythmes rythmez rythmât rythmée rythmés râblais râblait râblant râblent râblera râbliez râblons râblure râblées râlante râlants râlasse râlerai râleras râlerez râleurs râleuse râlions râlâmes râlâtes râpages râpasse râperai râperas râperez râperie râpeuse râpions râpures râpâmes râpâtes râteaux râtelai râtelas râteler râtelez râtelle râtelât râtelée râtelés règlent règnent réactif réadmet réadmis réadmit réadmît réagira réaient réalgar réalisa réalise réalisé réalité réalèse réalésa réalésé réanima réanime réanimé réarmai réarmas réarmer réarmes réarmez réarmât réarmée réarmés réasses récente récents réchaud récifal récitai récital récitas réciter récites récitez récitât récitée récités réclama réclame réclamé réclina récline"
let listMots = mots.split(" ")

//---------------------------------------------

let body = document.body
let tableau = document.querySelector(".tableau")
let selectedWord = /* listMots[Math.floor(Math.random()*listMots.length-1)].toUpperCase() */ "ROUMAIN"
let rowList = document.querySelectorAll(".row")
rowList.forEach(row =>{
    row.firstElementChild.innerText = selectedWord.charAt(0)
})
let caseList = document.querySelectorAll(".case")
console.log(rowList[0].children.length)
let caseTable = [
    [caseList[0], caseList[1], caseList[2], caseList[3], caseList[4], caseList[5], caseList[6]],
    [caseList[7], caseList[8], caseList[9], caseList[10], caseList[11], caseList[12], caseList[13]],
    [caseList[14], caseList[15], caseList[16], caseList[17], caseList[18], caseList[19], caseList[20]],
    [caseList[21], caseList[22], caseList[23], caseList[24], caseList[25], caseList[26], caseList[27]],
    [caseList[28], caseList[29], caseList[30], caseList[31], caseList[32], caseList[33], caseList[34]]
]

const lineCheck = (line) =>{
    caseTable[line].forEach((element, i) =>{
        if (element.innerText == selectedWord.charAt(i)){
            element.style.backgroundColor = "green"
        }
    })
}

const isFilled = (line, column) => {
    if (caseTable[line][column].innerText){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}
isFilled(0, 1)
// let caseValues = [
//     [],
//     [],
//     [],
//     [],
//     []
// ]

//? CLAVIER
let keyList = document.querySelectorAll(".key")
let lineIndex = 1
let attempt = 0;

let lineIndexMemory = 1
let attemptMemory = 0
let attemptWord = "" 
let goodAnswer = [true, false, false, false, false, false, false]
keyList.forEach(key =>{
    key.addEventListener("click", ()=>{
        if(attempt < 5 && lineIndex <7){
            if(caseTable[attempt][lineIndex].innerText){} else {
                caseTable[attempt][lineIndex].innerText = key.innerText
                lineIndex++; 
            } 
        } if (lineIndex == 7){
            for(let i=0; i<caseTable[attempt].length; i++){
                attemptWord += caseTable[attempt][i].innerText
            }
            setTimeout(()=>{
                caseTable[attempt].forEach((qase,i) =>{
                    if (qase.innerText == selectedWord.charAt(i)){
                        qase.style.backgroundColor = "green"
                        goodAnswer[i] = true
                        console.log(qase.innerText)
                    } else if (selectedWord.includes(qase.innerText) && selectedWord.charAt(i) != qase.innerText){
                        qase.style.backgroundColor = "yellow"
                    } else {
                        goodAnswer[i] = false
                    }
                })
                
                console.log(goodAnswer)
                if (goodAnswer[0] == true && goodAnswer[1] == true && goodAnswer[2] == true && goodAnswer[3] == true && goodAnswer[4] == true && goodAnswer[5] == true && goodAnswer[6] == true){
                    if (attempt < 5){
                        rowList.forEach(row =>{
                            row.style.display = "none"
                        })
                        tableau.style = "display: flex; justify-content: center; color: red; font-size: 4em"
                        tableau.innerText = "VICTOIRE !"
                    }
                } else if (attempt >= 4){
                    rowList.forEach(row =>{
                        row.style.display = "none"
                    })
                    tableau.style = "display: flex; flex-direction: column; justify-content: center; color: red; font-size: 4em; align-items: center"
                    tableau.innerText = "DÉFAITE !"
                    let create_sousText = document.createElement("div")
                    create_sousText.style = "display: flex; justify-content: center; color: red; font-size: 1em"
                    create_sousText.innerText = `Le mot était: ${selectedWord}`
                    tableau.appendChild(create_sousText)

                }
                console.log()
                attempt++
                lineIndex = 1
                // console.log(attempt, lineIndex)
            }, 1500)
            
        }

    })
})



// body.addEventListener("keydown", (e)=>{
//     
// })
