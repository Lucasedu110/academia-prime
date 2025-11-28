function showToast(msg){
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(()=> t.style.display='none', 2600);
}

document.querySelectorAll('.interest-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
        const plano = e.currentTarget.dataset.plan;
        document.getElementById('plano').value = plano;
        document.getElementById('inscricao').scrollIntoView({behavior:'smooth'});
        document.getElementById('nome').focus();
    });
});

document.getElementById('inscricao').addEventListener('submit', function(ev){
    ev.preventDefault();
    const nomeVal = nome.value.trim();
    const emailVal = email.value.trim();
    const telefoneVal = telefone.value.trim();
    const planoVal = plano.value.trim();
    const obsVal = observacao.value.trim();

    if(!nomeVal || !emailVal || !telefoneVal){
        showToast('Preencha os campos obrigatórios');
        return;
    }

    const inscricoes = JSON.parse(localStorage.getItem('prime_inscricoes') || '[]');
    inscricoes.push({
        nome: nomeVal,
        email: emailVal,
        telefone: telefoneVal,
        plano: planoVal,
        obs: obsVal,
        createdAt:new Date().toISOString()
    });

    localStorage.setItem('prime_inscricoes', JSON.stringify(inscricoes));
    showToast('Inscrição enviada com sucesso!');
    this.reset();
});


document.getElementById('whatsBtn').addEventListener('click', function(e){
    e.preventDefault();
    const phone = this.dataset.phone;
    window.open(`https://wa.me/${phone}`, '_blank');
});


document.querySelector('.close-x').addEventListener('click', () => {
    document.getElementById('inscricao').scrollIntoView({behavior:'smooth'});
});
