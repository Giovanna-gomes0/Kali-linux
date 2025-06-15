import react from 'react';
import './Content.css';

function Content(){
    return(
        <>
        <section>
            <h2>O que é o Kali Linux?</h2>
            <br />
            <p>
            O Kali Linux é uma distribuição Linux baseada no Debian, desenvolvida e mantida pela Offensive Security. Ele é voltado especialmente para testes de penetração (pentest), análise forense, auditoria de segurança e hacking ético.
            Hoje o Kali é um dos sistemas operacionais mais populares entre profissionais de segurança da informação, ele é uma ferramenta poderosa e deve ser usada com responsabilidade, apenas em ambientes autorizados, pois o uso indevido é ilegal.

            <br />
            <br />
            <h2>Principais Funcionalidades</h2>
            <br />
<h2>Pentest:</h2>
Ferramentas para invasão simulada, exploração de vulnerabilidades, testes em redes Wi-Fi e serviços.
<br />       
 <h2>Análise Forense: </h2>
 Programas para análise de arquivos, discos, logs, recuperação de dados apagados.   
 <br />                     
<h2>Segurança em Redes:</h2>
 Analisadores de pacotes, scanners de portas, sniffers, ferramentas para análise de tráfego.   
 <br />            
<h2>Engenharia Reversa:</h2>
 Desmontadores, depuradores e ferramentas para examinar binários e softwares.   
 <br />                             
 <h2>Criptografia e Senhas:</h2>
Ferramentas para quebra de senhas, força bruta, ataques de dicionário e análise de hashes.  
<br />                
<h2>Análise Web:</h2>
Softwares para análise de vulnerabilidades em sites e servidores web (como o Burp Suite, Nikto, OWASP ZAP). 
<br />
<br />
<br />
<h2>Principais Características</h2>
<br />
<h2>Foco em Segurança da Informação</h2>
    Inclui mais de 600 ferramentas voltadas para pentest, forense digital, engenharia reversa, ataques wireless, entre outras atividades de segurança.
   Ferramentas populares:Nmap, Wireshark, Aircrack-ng, Metasploit, Burp Suite, John the Ripper, Hydra, entre outras.
<br />
<br />
<h2>Ambiente Personalizável</h2>
   Pode ser facilmente customizado, com suporte a diversos ambientes gráficos como Xfce, GNOME e KDE
   Também pode rodar em modo texto (CLI), ideal para máquinas com poucos recursos.
<br />
<br />
<h2>Portabilidade</h2>
   Funciona como um sistema live (bootável via pendrive ou CD)
    Também pode ser instalado diretamente no HD ou utilizado em máquinas virtuais (como no VirtualBox ou VMware).
<br />
<br />
<h2>Suporte a Plataformas Diversas</h2>
    Disponível para arquiteturas x86, x64 e ARM (como Raspberry Pi).
    Isso o torna útil em dispositivos pequenos, como placas embarcadas, e em grandes servidores.
<br />
<br />
<h2>Atualizações Constantes</h2>
 Recebe atualizações frequentes de ferramentas e correções de segurança, mantendo o sistema alinhado com as novidades do mundo do hacking ético.
<br />
<br />
<h2>Suporte a Scripts Automatizados</h2>
Possui suporte a scripts em Python, Bash, Perl, etc., facilitando a criação de automação de ataques ou testes recorrentes
</p>
        </section>
        </>
    );
};
export default Content;