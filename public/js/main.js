let mots = "roulera rouleur roulier rouliez rouloir roulons roulure roulées roumain roupies rouquin rousses roussie roussin roussir roussis roussit roussît roustie roustir roustis roustit roustît routage routais routait routant routard routent routera routier routiez routine routons routées rouvert rouvres rouvrez rouvrir rouvris rouvrit rouvrue rouvrus rouvrît rouâmes rouâtes rouîmes rouîtes rowings royales royaume royauté ruaient ruasses rubanai rubanas rubaner rubanes rubanez rubanât rubanée rubanés rubiacé rubican rubéfia rubéfie rubéfié rubéole ruchais ruchait ruchant ruchent ruchera ruchers ruchiez ruchons ruchées rudenta rudente rudenté rudesse rudoies rudoyai rudoyas rudoyer rudoyez rudoyât rudoyée rudoyés rudéral ruelles ruerais ruerait rueriez ruerons rueront ruffian rufians rugirai rugiras rugirez rugisse rugueux rugîmes rugîtes ruilais ruilait ruilant ruilent ruilera ruiliez ruilons ruilées ruinais ruinait ruinant ruinent ruinera ruineux ruiniez ruinons ruinure ruinées rumeurs ruminai ruminas ruminer rumines ruminez ruminât ruminée ruminés rupinai rupinas rupiner rupines rupinez rupinât rupteur rupture rurales rusasse ruserai ruseras ruserez rusions russule rustaud rustine rustres rusâmes rusâtes rutilai rutilas rutiler rutiles rutilez rutilât ruèrent rythmai rythmas rythmer rythmes rythmez rythmât rythmée rythmés râblais râblait râblant râblent râblera râbliez râblons râblure râblées râlante râlants râlasse râlerai râleras râlerez râleurs râleuse râlions râlâmes râlâtes râpages râpasse râperai râperas râperez râperie râpeuse râpions râpures râpâmes râpâtes râteaux râtelai râtelas râteler râtelez râtelle râtelât râtelée râtelés règlent règnent réactif réadmet réadmis réadmit réadmît réagira réaient réalgar réalisa réalise réalisé réalité réalèse réalésa réalésé réanima réanime réanimé réarmai réarmas réarmer réarmes réarmez réarmât réarmée réarmés réasses récente récents réchaud récifal récitai récital récitas réciter récites récitez récitât récitée récités réclama réclame réclamé réclina récline"
let listMots = mots.split(" ")

//---------------------------------------------

let body = document.body
let selectedWord = listMots[Math.floor(Math.random()*listMots.length-1)]
let rowList = document.querySelectorAll(".row")
let caseList = document.querySelectorAll(".case")
console.log(rowList[0].children.length)
let caseTable = [
    [],
    [],
    [],
    [],
    []
]
let isCaseFilled = [
    [true, false, false, false , false, false , false],
    [false, false , false , false, false, false, false],
    [false, false , false , false, false, false, false],
    [false, false , false , false, false, false, false],
    [false, false , false , false, false, false, false]
]

//? CLAVIER
let keyList = document.querySelectorAll(".key")
keyList.forEach(key =>{
    key.addEventListener("click", ()=>{
        for(let i=1; i<rowList[0].children.length-1; i++){
            if(rowList[0].children[i-1].innerText){
                if(rowList[0].children[i+1].innerText){} 
                else {
                    rowList[0].children[i].innerText = key.innerText
                }
            }
        }
    })
})
