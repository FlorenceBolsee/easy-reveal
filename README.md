# Easy-reveal
Plugin qui ajoute facilement un effet d'apparation au scroll sur n'importe quel élément html.

## Démo :
[Lien vers la démo](https://florencebolsee.github.io/easy-reveal/dist/index.html)

## Installation :
- Téléchargez le [.zip](https://github.com/FlorenceBolsee/easy-reveal/blob/master/easy-reveal.zip)
- Dans votre fichier html, liez le fichier **easy-reveal.min.css** dans le head et le fichier **easy-reveal.min.js** dans le body comme ci-dessous.  Vous aurez également besoin de **JQuery** et **Lodash** (ici utilisé pour son throttle afin d'améliorer les performances) pour faire fonctionner ce plugin, attention à respecter l'ordre des liens.

```
<head>
<link rel="stylesheet" href="css/easy-reveal.min.css">
<link rel="stylesheet" href="css/style.min.css">
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.1/lodash.min.js"></script>
  <script src="js/easy-reveal.min.js"></script>
  <script src="js/main.min.js"></script>
</body>
```

## Fonctionnement :
Il ne reste plus qu'à ajouter la classe **"easy-reveal"** à chaque bloc auquel vous voulez appliquer l'effet.

## Remarque :
L'effet utilise les propriétés css **"opacity"** et **"transform: translateY()"**.  Il est préférable d'éviter de les contredire sur les bocs auquel vous allez appliquer l'effet.  Si vous le faites malgré tout, sachez que les blocs **"easy-reveal"** ont **"opacity: 0"** et **"transform: translateY(50px)"** au départ puis **"opacity: 1"** et **"transform: translateY(0)"** quand ils reçoivent la classe **"reveal"** au scroll.
