# Web personal

[Link a la Web](https://julianmenav.github.io)

Este repositorio contiene el codigo fuente de la aplicación antes de migrar a Astro.

## Formas de desplegar la aplicación antes vs ahora
- #### Vite
Antes, usando Vite, ejecutaba un script cada vez que quería hacer deploy de la aplicación, el cual construía la Build (dist) y la subía al repositorio julianmenav.github.io y a su vez este era desplegado.

- #### Astro
Ahora en cambio, con Astro, es necesario que todo el código se encuentre en el repositorio con el nombre julianmenav.github.io para que github actions haga su función correctamente y lo suba a un dominio del mismo nombre.

## A modo de recordatorio, despliegue del resto de apps.

A la hora de desplegar otra aplicación en un dominio .github.io/{nombre_repo}. 
- #### Vite
En vite usaba el cli de gh-pages para que se desplegase la aplicación en una rama "gh-pages".
- #### Astro
En astro en cambio se hace activando github actions y escribiendo las directrices a seguir en un .yml. 

Cada vez que se haga un push en la rama que especifiquemos en el .yml, se activará el workflow y se desplegará la aplicación.




