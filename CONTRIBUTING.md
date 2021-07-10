# Contenidos
* [1. Introducción](#1-introduction)
  * [1.1 Why do these guidelines exist?](#11-why-do-these-guidelines-exist)
  * [1.2 What kinds of contributions are we looking for?](#12-what-kinds-of-contributions-are-we-looking-for)
* [2. Rules](#2-rules)
* [3. Your First Contribution](#3-your-first-contribution)
* [4. Getting Started](#4-getting-started)
  * [4.1 Setting up your development environment](#41-setting-up-your-development-environment)
  * [4.2 Keeping your dependencies up to date](#42-keeping-your-dependencies-up-to-date)
  * [4.3 To contribute changes](#43-to-contribute-changes)
  * [4.4 How To Report A Bug](#44-how-to-report-a-bug)
  * [4.5 How To Suggest A Feature Or Enhancement](#45-how-to-suggest-a-feature-or-enhancement)
* [5. Code Review Process](#5-code-review-process)
  * [5.1 Issues](#51-issues)
  * [5.2 Pull Requests](#52-pull-requests)
  * [5.3 Differences between "new features" and "improvements"](#53-differences-between-new-features-and-improvements)
* [6. Community](#6-community)

# 1. Introduction
Antes que nada darte la bienvenida al proyecto **Shofy**, y agradecerte por el interés que has mostrado en este proyecto. Nosotros constantementes estamos interesados en mejorar nuestro proyecto, y es pro ello por lo que apreciamos cualquier tipo de ayuda que usted pueda ofrecernos, por mínima que sea.

### 1.1 Why do these guidelines exist?
Shofy es un proyecto de software libre, y es por ello por lo que cada uno de los desarrolladores y contribuidores que nos ayudan y emplean parte de su tiempo en la colaboración de este proyecto actualmente deben de cumplir una serie de guías de servicio para facilitar el trabajo de revisión, que creeme, no es poco. Nos tomamos horas en coordinarnos y organizar las diferentes "issues" de las nuevas funcionalidades para así poder testear las nuevas pulls requests. Mediante el seguimiento de estas guías ayudarás al equipo de desarrolladores a ahorrar bastante tiempo. Y así poder aprovar/denegar tu solicitud lo antes posible.

### 1.2 What kinds of contributions are we looking for?
Nos encabta recibir aportaciones de nuestra comunidad. Desde ayudas a la resolución de bugs, documentaciones, comandos, mejoras... ¡Todo ello es más que bienvenido!

# 2. Rules
1. Asegurate de que las diferentes funcionalidades son compatibles con Windows y Linux.
2. Todas las funcionalidades deben usar JavaScript, y preferiblemente deben de funcionar con `discord.js@12.5.3`
3. Crea nuevas issues para nuevas funcionalidades, que creas que deben de ser añadidas, ¡Asegurate de explicar el "¿Por qué?" quieres que la desarrollemos!
5. Evita mantener discusiones elevadas de tono en los diferentes "issues/debates" que se formen en nuestra comunidad de GitHub

# 3. Your First Contribution
Antes de contribuir con Shofy, asegurate de tomar un vistazo en la categoría de Issues de este repositorio, y en el caso de que necesites ayuda, asegurate de crear una nueva issue con cualquiera de las siguientes categorías

* beginner - problemas leves relacionados con tu código, que pueden ser resueltos con unas pocas de líneas.
* help-wanted - problemas que no están asignados con ningún usuario en concreto, y que su resolución puede ser más compleja.

**¿Cómo puedo crear mi primera "Pull Request"?** Puedes aprender de esta serie gratuita de: [cómo contribuir en un proyecto open-source en github.](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

¡Ya estás listo para contribuir en el proyecto, si necesitas ayuda asegurate de crear una issue o entrar a nuestra [comunidad de Discord](https://discord.gg/Chiqui)!

# 4. Getting Started
El repositorio de **shofy.js** cuenta con una serie de módulos que nos ayudan a simplificar el proceso de revisión de los diferentes códigos. Es por ello por lo que destacamos muy a menudo que antes de contribuir en shofy se sigan las diferentes guías de servicio. Esto nos ayudará a evaluar la calidad de tu código, saber los diferenter errores...

### 4.1 Setting up your development environment
Antes de desarrollador en Shofy, asegurate de que tienes instalado las siguientes librerías
 - JavaScript
 - git
 - npm
 
En el caso de que estés un sistema Linux te recomiendo que te pases por el [siguiente repositorio](https://github.com/chiquicalris-dev/linux-node) para facilitar la instalación de JavaScipt y NPM.
Una vez que cuentes con todas las librerías descargadas, asegurate de hacer fork de este proyecto en tu computadora local, y posteriormente clonarlo en tu computadora mediante el uso del siguiente comando, (A destacar que el comando variará en función de tu nombre de usuario).
```bash
  git clone https://github.com/chiquicalris-dev/shofy.git
```

### 4.2 Keeping your dependencies up to date
Whenever you pull from upstream (V3/develop on the main repository) and you notice either of the files `setup.cfg` or `tools/dev-requirements.txt` have been changed, it can often mean some package dependencies have been updated, added or removed. To make sure you're testing and formatting with the most up-to-date versions of our dependencies, run `make syncenv`. You could also simply do `make newenv` to install them to a clean new virtual environment.

### 4.3 To contribute changes

1. Create a new branch on your fork
2. Make the changes
3. If you like the changes and think the main Red project could use it:
    * Run tests with `tox` to ensure your code is up to scratch
    * Create a Pull Request on GitHub with your changes
      - If you are contributing a behavior change, please keep in mind that behavior changes
        are conditional on them being appropriate for the project's current goals.
        If you would like to reduce the risk of putting in effort for something we aren't
        going to use, open an issue discussing it first.

### 4.4 How To Report A Bug
Please see our **ISSUES.MD** for more information.

### 4.5 How To Suggest A Feature Or Enhancement
The goal of Red is to be as useful to as many people as possible, this means that all features must be useful to anyone and any server that uses Red.

If you find yourself wanting a feature that Red does not already have, you're probably not alone. There's bound to be a great number of users out there needing the same thing and a lot of the features that Red has today have been added because of the needs of our users. Open an issue on our issues list and describe the feature you would like to see, how you would use it, how it should work, and why it would be useful to the Red community as a whole.

# 5. Code Review Process

We have a core team working tirelessly to implement new features and fix bugs for the Red community. This core team looks at and evaluates new issues and PRs on a daily basis.

The decisions we make are based on a simple majority of that team or by decree of the project owner.

### 5.1 Issues
Any new issues will be looked at and evaluated for validity of a bug or for the usefulness of a suggested feature. If we have questions about your issue we will get back as soon as we can (usually in a day or two) and will try to make a decision within a week.

### 5.2 Pull Requests
Las pull requests son evaluadas en función de su calidad y efectividad en "¿Cómo?" solucionan el error correspondienete al problema plantado, el proceso de revisión de las nuevas pull requests funciona de la siguiente manera:

1. Una pull request es subida.
2. Los miembros del equipo interno revisan el código, este proceso suele durar menos de cinco días.
3. Una vez que un miembro del equipo apruebe tu solicitud:
    * Si tu pull request es considerada una mejora, el equipo tendrá un día para añadir/denegar la solicitud, y añadirla a la rama princpal.
    * Si tu pull request es considerada una nueva funcionalidad el equipo tendrá una semana completa para aprovar o dengear tu solicitud en el proyecto.
4. Cualquier feedback serdá dado con un tiempo de respuesta de menos de una semana, en el caso de que tu PR no sea cerrada.
5. Si tu pull request no ed denegada y ningún miembro del equipo realiza cambios será automáticamente aprovada y añadida a la rama principal.

### 5.3 Differences between "new features" and "improvements"
La diferencia entre "Nueva funcionlidad" y "Mejora" es que las nuevas funcionalidades son evaluadas con un mayor tiempo, debido a que suelen contener nuevas librerías que deben de ser comprobadas y revisadas para no poner en riesgo al proyecto, mientras que las mejoras suelen ser unas pocas de líneas, y es por ello por lo que son revisadas con un menor tiempo de respuesta, de alrededor de un día.
