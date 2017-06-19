Este projeto foi criado com [Create React App](https://github.com/facebookincubator/create-react-app).
depois feito 'yarn eject',customizado e implantado parte das configurações por [Jefferson de Melo Doljak](https://github.com/doljak) 

Abaixo vc encontrará informações de como instalar e rodar o projeto<br/>

# React boilerplate

[Setup Inicial](#setup-inicial)
  - [Configuração do Ambiente Local Frontend](#configuracao-ambiente-local-frontend)
  - [yarn start](#yarn-start)
  - [yarn build:dev](#yarn-build-dev)
  - [yarn build:prod](#yarn-build-prod)
  - [yarn test](#yarn-test)



# Setup Inicial

Este projeto foi desenvolvido com Webpack, React, Sass.

## Configuração do Ambiente Local Frontend

### 1 - clone o projeto para o seu `document root`
  `$ git clone git@github.com:doljak/react-boilerplate.git`

  você terá a seguinte estrutura
  ```
  react-boilerplate 
    _config.web.webpack
    _config
    _src
    public_html
    .gitignore
    pakage.json

  ```
### 2 - habilite/Ajuste:
  #### php
    - php.ini habilite o short_open_tag = On
    - php.ini set o date.timezone = ('America/Sao_Paulo')

  #### apache  
    - no hosts do apache coloque esta linha(no Mac fica em /etc/hosts)<br/>
      127.0.0.1 seu.projeto.local

    - no virtual hosts do apache coloque esta linha(no Mac fica em /etc/apache2/extra/httpd-vhosts.conf)
      
      <VirtualHost *:80>
        DocumentRoot "/Seu/caminho/físico/para/seu/projeto/public_html"
        ServerName seu.projeto.local
      </VirtualHost>
      
    - reinicie o apache da sua máquina(Mac: `apachectl restart`)

### 3 - prepare o ambiente MAM
  dentro da pasta mam:<br/>

  copie os arquivos de configuração do APP<br/>
  `$ cp _config/* .`

  crie o arquivo .env com o texto "local"<br/>
  `$ touch .env`

  instale os módulos necessários<br/>
  `$ yarn install`

### 4 - inicie o ambiente<br/>
  `$ yarn start`

## Yarn start
  
  Todo o projeto em relação a componentes, js, sass e css esta organizado na pasta _src, components/(react), sass/(sass e css), js/(bibliotecas que queira usar)
  
  Dará inicio ao ambiente dev<br/>
  `"start": "npm run build:dev"`

  - pastas transcopiladas:<br/>
    css: public_html/_dist/dev/seu.projeto.bundle.css<br/>
    js:  public_html/_dist/dev/main.bundle.js

## Yarn build:dev
  
  exatamente igual:
  [yarn start](#yarn-start)

## Yarn build:prod

  Rodar quando for preparar para produção o código, ele transcopila, minimifica, coloca autoprefixer e faz tratamentos necessários para funcionamento crossbroswers
  
   - pastas transcopiladas:<br/>
    css: public_html/_dist/vendor/seu.projeto.min.css<br/>
    js:  public_html/_dist/vendor/main.bundle.js

## Yarn test

  Teste feitos com os módulos [karma](https://karma-runner.github.io/1.0/index.html), [mocha](https://mochajs.org/), [expect](https://github.com/mjackson/expect)

  para rodar:<br/>
  `$ yarn test`

  todos os arquivos com extensão `.test.js` rodarão, Ler o arquivos Example.test.js para saber estrutura de sintaxe, para métodos ler [expect](https://github.com/mjackson/expect)




