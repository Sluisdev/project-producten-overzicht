#Project Producten Overzicht

Dit Project is gebouwd met Next.js en TypeScript. 

Het Project heeft als doel een overzicht met producten. Van elk product is de titel, omschrijving (deels), prijs & categorie zichtbaar. 

##Features

1. Sorteren op basis van de prijs
2. Filter per categorie
3. Zoek op basis van naam
4. Paginatie

##Data & Filters

###Data
De Producten Data wordt opgehaald via de publieke API "https://fakestoreapi.com/", specifiek the GET All route /products. 

De functie die deze data ophaald wordt gecached. Dit zorgt voor minder data aanvragen voor dezelfde data, wat resulteert in betere prestaties. 

De 'cacheLife' is ingesteld op 'hours' dus de cache zal paar keer per dag ververst worden met nieuwe data. 

###Filters

Aan de linkerkant van het scherm kan een filter paneel gevonden worden. In dit paneel kan op prijs gesorteerd worden, gezocht op product naam, en filteren per categorie.

Filters worden toegepast doormiddel van query string parameters. Zodra één van de filters wordt toegepast, wordt een nieuwe query string gemaakt op basis van de huidige URL & de geselecteerde/ingevulde filters. De URL wordt geupdate met de nieuwe query waarden en dit triggert de server om bepaalde componenten te re-renderen, en worden de filters toegepast. 

Er is ook een mogelijkheid om de filters te resetten door op de knop 'reset' te klikken. 

##Components

###Product Cards

Met Next.Js is het uiteraard mogelijk om gebruik te maken van Server Components. In dit Project heb ik dit ook gedaan. 

De 'Cards' Component in 'cardsContainer.tsx' is een async server component. Dit Component roept de functie aan voor alle producten data of, op basis van de query parameters, roept de functie die een Array met gefilterde producten terug levert.  Dit Component is geplaatst in de page.tsx, in een Suspense boundary zodat de rest van de UI niet hoeft te wachten op het genereren van de Product components.

De API data is dan gebruikt om de 'ProductCard' componenten te generen. Dit zijn server components en worden dus ook door de server gegenereerd. 

###Paginatie

In de Cards component kan ook de 'Pagination'component gevonden worden. Door het toepassen van paginatie word niet direct de hele dataset gegenereerd, alleen een selectief nummer producten per pagina. 

###ProductListControl

de 'ProductListControl' Component bevat de logica voor de filters. Dit is een Client Component zodat ik gebruik kan maken van useState en interactiviteit, zoals onClick. 

In dit Component worden ook de query string parameters toegevoegd, geupdatet, of verwijderd. 

##Styling

Omdat de producten data meerdere categorieën bevat, heb ik gekozen voor een neutrale maar moderne uitstraling. 

De styling is responsive gemaakt voor merendeels alle schermen. 

In desktop formaat, is het filter paneel altijd zichtbaar. In de mobiele versie kun je een 'zwevende' knop vinden aan de linker kant om het paneel te openen. 

Ik zou jullie aanraden om de repo te clonen & de rest van de styling zelf te bekijken! Ik ben positief over het resultaat.







