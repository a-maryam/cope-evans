### [The Cope Evans Project](http://165.227.217.17): *Exploring the lives of a Quaker family during the industrial age*
[Site](http://165.227.217.17) |  [Map](http://165.227.217.17/letters/)

This project explores the **Cope Evans Family Papers (1683-2012)** curated by Haverford Special Collections. The Cope Evans were a Quaker family in Philadelphia during the nineteenth century. The majority of papers in the collection are from that time period. The collection now also contains some letters from the twentieth century (donated by J. Morris Evans). This site includes data visualizations, essays, and snippets of the Cope Evans Family Papers Collection.

#### Core Frameworks & Languages
- Django 2.2.3
- Python 3.5.2

#### Technologies & Tools *(Summer 2019)*
- Mapbox: *[cookbook entry](https://github.com/HCDigitalScholarship/ds-cookbook/blob/master/MapsOrGeocoding/mapbox/README.md)*
- Chart.js: *was used for a chart, later removed chart*
- JQuery: *used to load up JSON files*
- Bootstrap: *the bootstrap template used is in the repository, so new pages can be adapted for use on the site*
- django-flatpages: *[cookbook](https://github.com/HCDigitalScholarship/ds-cookbook/tree/master/django_flatpages), [documentation](https://docs.djangoproject.com/en/2.2/ref/contrib/flatpages/)*, *store simple static pages in database rather than creating a template*
- CKEditor *Rich text editor in admin*

#### Continuing Technologies *(Summer 2014 - Present)*
- JQuery 
- D3 
- FancyBox
- Mapbox
- Arc.js 

#### Problems
- Google Maps geocoding API: The size of the output was greater than the number of requests made, so the data was no longer associative. I switched to Mapbox.
- Dash: I couldn't get the Dash app to integrate. I switched to Chart.js.
- Wagtail
- [django flatcontent](https://github.com/orcasgit/django-flatcontent): too old, very broken.
- A large portion of the collection does not have subject tags. I created a chart that was supposed to show the frequency of subject tags in letters written by J. Morris Evans. The data ended up being pulled from other letters, because that portion of the collection appears to be mostly untagged. Beware of using the CONTENTdm API to create subject tag frequency charts. It's likely they will be inaccurate due to lack of data.

#### Requirements
Not all of the packages in the requirements file were used. Some, like Wagtail and Dash were never properly configured. Integrating a dash app into the rest of the project was very troublesome (even with the [cookbook entries](https://github.com/HCDigitalScholarship/ds-cookbook/tree/master/dash) and an [example](https://github.com/HCDigitalScholarship/dashboard) to work from), so I switched to Chart.js. Wagtail appeared to be missing some dependencies when I first tried to install it in lieu of CKEditor. CKEditor started working once we brought its js into the project static folder (I suspect this is a server configuration issue that is very easy to fix). 
