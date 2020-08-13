import { StatutDonnee } from "../statutDonnee.enum";

export class Donnee {
  constructor(private _numTache?: number, private _statutPrepa?: StatutDonnee, private _dateEnPrepa?: Date,
              private _statutApprouve?: StatutDonnee, private _dateApprouve?: Date, private _statutPret?: StatutDonnee,
              private _datePret?: Date, private _statutEnCours?: StatutDonnee, private _dateEnCours?: Date,
              private _statutFini?: StatutDonnee, private _dateFini?: Date, private _com1n?: StatutDonnee,
              private _date1n?: Date, private _statutCloture?: StatutDonnee, private _dateCloture?: Date,
              private _statutAnnule?: StatutDonnee, private _dateAnnule?: Date, private _statutFerme?: StatutDonnee,
              private _dateFerme?: Date)
    {

    }
    get numTache(): number {
      return this._numTache;
    }

    set numTache(value: number) {
        this._numTache = value;
    }
    get statutPrepa(): StatutDonnee {
      return this._statutPrepa;
    }

    set statutPrepa(value: StatutDonnee) {
        this._statutPrepa = value;
    }
    get dateEnPrepa(): Date {
      return this._dateEnPrepa;
    }

    set dateEnPrepa(value: Date) {
        this._dateEnPrepa = value;
    }
    get statutApprouve(): StatutDonnee {
      return this._statutApprouve;
    }

    set statutApprouve(value: StatutDonnee) {
        this._statutApprouve = value;
    }
    get dateApprouve(): Date {
      return this._dateApprouve;
    }

    set dateApprouve(value: Date) {
        this._dateApprouve = value;
    }
    get statutPret(): StatutDonnee {
      return this._statutPret;
    }

    set statutPret(value: StatutDonnee) {
        this._statutPret = value;
    }
    get datePret(): Date {
      return this._datePret;
    }

    set datePret(value: Date) {
        this._datePret = value;
    }
    get statutEnCours(): StatutDonnee {
      return this._statutEnCours;
    }

    set statutEnCours(value: StatutDonnee) {
        this._statutEnCours = value;
    }
    get dateEnCours(): Date {
      return this._dateEnCours;
    }

    set dateEnCours(value: Date) {
        this._dateEnCours = value;
    }
    get statutFini(): StatutDonnee {
      return this._statutFini;
    }

    set statutFini(value: StatutDonnee) {
        this._statutFini = value;
    }
    get dateFini(): Date {
      return this._dateFini;
    }

    set dateFini(value: Date) {
        this._dateFini = value;
    }
    get com1n(): StatutDonnee {
      return this._com1n;
    }

    set com1n(value: StatutDonnee) {
        this._com1n = value;
    }
    get date1n(): Date {
      return this._date1n;
    }

    set date1n(value: Date) {
        this._date1n = value;
    }
    get statutCloture(): StatutDonnee {
      return this._statutCloture;
    }

    set statutCloture(value: StatutDonnee) {
        this._statutCloture = value;
    }
    get dateCloture(): Date {
      return this._dateCloture;
    }

    set dateCloture(value: Date) {
        this._dateCloture = value;
    }
    get statutAnnule(): StatutDonnee {
      return this._statutAnnule;
    }

    set statutAnnule(value: StatutDonnee) {
        this._statutAnnule = value;
    }
    get dateAnnule(): Date {
      return this._dateAnnule;
    }

    set dateAnnule(value: Date) {
        this._dateAnnule = value;
    }
    get statutferme(): StatutDonnee {
      return this._statutFerme;
    }

    set statutFerme(value: StatutDonnee) {
        this._statutFerme = value;
    }
    get dateFerme(): Date {
      return this._dateFerme;
    }

    set dateFerme(value: Date) {
        this._dateFerme = value;
    }
}
