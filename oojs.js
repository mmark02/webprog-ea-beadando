class SzamologepGomb{
    constructor(ertek, szamologep){
        this.ertek = ertek;
        this.szamologep = szamologep;
        this.gomb = document.createElement("button");
        this.gomb.textContent = ertek;
        this.gomb.addEventListener("click", () => this.szamologep.gombKattintas(this.ertek));
        document.querySelector("#gombok").appendChild(this.gomb);
    }
}

class Szamologep{
    constructor(){
        this.kijelzo = document.querySelector("#kijelzo");
        this.kijelzo.value = "0";
        this.muvelet = null;
        this.elsoSzam = null;
        this.masodikSzam = null;

        const gombok = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"];

        gombok.forEach(ertek => new SzamologepGomb(ertek, this));
    }

    gombKattintas(ertek){
        if (!isNaN(ertek) || ertek === ".") {
            this.szamBeker(ertek);
        }
        else if(ertek === "C"){
            this.torles();
        }
        else if(ertek === "="){
            this.szamitas();
        }
        else{
            this.muveletBeallit(ertek);
        }
    }

    szamBeker(ertek){
        if (this.kijelzo.value === "0" && ertek !== ".") {
            this.kijelzo.value = ertek;
        }
        else{
            this.kijelzo.value += ertek;
        }
    }

    torles(){
        this.kijelzo.value = "0";
        this.muvelet = null;
        this.elsoSzam = null;
        this.masodikSzam = null;
    }

    muveletBeallit(muvelet){
        this.elsoSzam = parseFloat(this.kijelzo.value);
        this.muvelet = muvelet;
        this.kijelzo.value = "0";
    }

    szamitas(){
        this.masodikSzam = parseFloat(this.kijelzo.value);
        let eredmeny;

        switch(this.muvelet){
            case "+":
                eredmeny = this.elsoSzam + this.masodikSzam;
                break;
            case "-":
                eredmeny = this.elsoSzam - this.masodikSzam;
                break;
            case "*":
                eredmeny = this.elsoSzam * this.masodikSzam;
                break;
            case "/":
                eredmeny = this.elsoSzam / this.masodikSzam;
                break;
        }

        this.kijelzo.value = eredmeny;
        this.muvelet = null;
        this.elsoSzam = eredmeny;
        this.masodikSzam = null;
    }
}

const szamologep = new Szamologep();