
var documents = [{
    "id": 0,
    "url": "https://jhermann.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://jhermann.github.io/about/",
    "title": "About Me",
    "body": "📝 Jürgen Hermann · 📧 jh@web. de 🐍 A long long time ago, I started with Python 1. 5 at web. de,founded the MoinMoin wiki project shortly thereafter, and am nowenjoying the increased traction that Python recently gets fromdata science and machine learning.  This website is powered by fastpages "
    }, {
    "id": 2,
    "url": "https://jhermann.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://jhermann.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://jhermann.github.io/continuous-delivery/devops/automation/2020/02/25/continuous-delivery.html",
    "title": "Continuous Delivery Explained",
    "body": "2020/02/25 -            I wrote this back in September 2014 and never published it, but since it's an introductory piece it stands its ground, so let this serve as an initial post… CD in a Nutshell&#182;: A typical mission statement for Continuous Delivery is this… Our highest priority is to satisfy the customer,through early and continuous delivery of valuable software. Continuous Delivery strives to improve the process of software delivery, by applying Continuous Deployment paired with automated testing and Continuous Integration. The goal is creating software developed to a high standard and easily packaged and deployed to test environments, resulting in the ability to rapidly, reliably and repeatedly push out enhancements and bug fixes to customers in small increments, at low risk and with minimal manual overhead. CD is effective because it facilitates an explorative approach by providing real, valuable measurements of the output of the process, and feeding those results back into the process. It's the next logical step after applying Agile principles to development, by expanding the scope to the whole software life-cycle and all involved parties, from inception to going live and then maintaining the product for a substantial amount of time in fast-paced iterations. Some More Details&#182;: Continuous Delivery means that your software is production-ready from day one of your project (even when it's not “feature complete”), and that you can release to users on demand at the push of a button. There are several practices and patterns that enable this, but the foundation is formed in particular by excellent configuration management, continuous integration, and comprehensive automated testing at all levels. The key pattern is the deployment pipeline, which is effectively the extension of continuous integration out to production, whereby every check-in produces a release candidate which is assessed for its fitness to be released to production through a series of automated and then manual tests. In order to be able to perform these validations against every build, your regression tests must be automated — both at the unit and acceptance level. Humans then perform tasks such as exploratory testing, usability testing, and showcases as later validations against builds that have already passed the automated tests. Builds can be deployed automatically on demand to testing, staging and production environments by the people authorized to do so — note that this means deployments are triggered by humans and performed by machines. Through these practices, teams can get fast feedback on whether the software being delivered is useful, reduce the risk of release, and achieve a much more predictable, reliable process for software delivery. The backbone of CD is a culture in which everybody, if somehow involved in the delivery process, collaborates throughout the life-cycle of the product — developers, testers, infrastructure, operators, DBAs, managers, and customers alike. Where to Go From Here?&#182;: Here are some resources for diving deeper into the topic: Jez Humble's Blog · Continuous DeliveryIT Revolution DevOps BlogDevops Weekly Mailing List (by @garethr)Team Topologies"
    }, {
    "id": 5,
    "url": "https://jhermann.github.io/fastpages/how-to/2020/02/20/fastpages-pitfalls.html",
    "title": "fastpages: Pitfalls, Tips & Tricks",
    "body": "2020/02/20 -           This article will be updated regularly with new information as it is discovered. Introduction&#182;: fastpages will automatically convert Jupyter Notebooks saved into the _notebooks directory as blog posts! You must save your notebook with the naming convention YYYY-MM-DD-*. ipynb. Otherwise the file's modification time is used, but that is not something you should rely on. See Writing Blog Posts With Jupyter for more details on special markup features. Things to Consider&#182;: Always quote your title and sub-title. Also quote any tags that are not purely alpha-numerical. Do not use today's date in filenames if you plan to publish soonish – timezone differences to the build machines will possibly make your article disappear from the generated index. Categories must be listed in a bracketed list – you cannot make it multi-line. Isolate the title, subtitle, and metadata into their own cell (the first one). Currently, the only way to refer to the same image from metadata and notebook content is to place it in images/ and use an absolute GH user content URL in your ![](…) markup. How-Tos&#182;: Updating the fastpages Template&#182;: To get changes from upstream, check out your own copy of the template project. To catch up for the first time, find the Initial commit in your blog repository, then make sure there are no commits after the time of that commit in the template. If there are, find the last commit before that date (the last one you already have), and use its SHA for a range «sha». . HEAD in the update procedure that follows, starting with the git diff. Now to catch up, when you git pull --ff-only in the template, there is a line starting with Updating and a SHA range. Call git diff «sha-range» &gt;/tmp/fastpages. patch. Change to your blog repository workdir (make sure you have a clean workdir with no pending changes) and apply that patch: patch -N -p1 &lt;/tmp/fastpages. patch. Look out for patch rejects and solve and resolve any conflicts. Finally commit the template changes, ideally mentioning the SHA range in the commit message for record-keeping. Troubleshooting&#182;: Article is not in the Index&#182;: See above hint regarding dates in the (near) future, and timezone differences between localhost and the cloud. Index Entry is Missing Most Fields&#182;: When an entry appears mostly empty, there is some metadata problem: missing quotes, improper YAML syntax, etc. Backtrack your changes in the git history, and never change metadata in bulk, so you can isolate the problem. And wait for a successful build after each change. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}