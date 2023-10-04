
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);  
}
escrevendoLetra()

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')

ativaMenu.addEventListener('click',()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado');
});


}
class FormSubmit {
    constructor(settings){
        this.settings = settings;
        this.form = document.querySrlector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.from) {
            this.url =  this.from.getAttributr("action");
        }
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.from.querySelectorALL("[name]");
        fields.forEach((field) =>{
            formObject[field.getAttribule("name")] = field.value;
        });
        return formObject;
    }

    async sendForm() {
        await fetch(this.url, {
            method: "POST",
            headers: {
                "content-Type": "apllication/json",
                Accept: "application/json",
            },
            bady: JSON.stringify(this.getFormObject()),
        });
    }
    init() {
        if (this.form) this.formButton.addEventListener("click" () 
        => this.displaySuccess());
    } catch (error) {
        this.displayError();
        throw new error(error)
    }
}

const FormSubmit = new FormSubmit({
    form:"[data-form]",
    button:"[data-button]",
    success: "<h1>Mensagem enviarada!</h1>",
    error: "<h1> Nao foi possivel enviar sua mensagem.</h1>",
});
