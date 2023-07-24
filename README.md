# Clarke-Physiotherapy

Most documentation is in each individual file, this page covers the steps for deploying the site live (please delete this file if successful and if the repository is made public) <br>
I would recommend looking through the documentation for the NavBar, HomePage, App.js, and each of the individual pages/folds before trying to host as the website still needs proper links to instagram, linkedin business profile. The Clarke Logo will also need added to the NavBar.js file <br>
As is, the website could be hosted now without those features, so it might be better from a competitive standpoint to get it hosted sooner rather than later, in which case please read the items below: <br>

To test out the website, clone it into a local repository, navigate to the clarke-physio folder, and run 
```
npm start
```

To build the production version, run 

```
npm run build
```

Here are some websites to look at before hosting:

For help with github hosting, please refer to this [blog about deployment](https://blog.logrocket.com/deploying-react-apps-github-pages/)<br>
and this website about linking it to your [GoDaddy domain](https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef)<br>
It might also be helpful to look at this website for general info about how to use [Github Pages](https://pages.github.com/)<br>
This one is also helpful [Github Pages Documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)<br>

Note: it looks like to host on Github Pages requires either a premium account or that the repo be made public in settings.
Hosting directly on GoDaddy would also be an option if you want the repository to remain private.

From what I've gathered, I believe these are the steps required for hosting the site, but it may help to consult someone else first: <br>
- Transfer ownership of repository
- (Possibly not needed since this is a React Application): create new repo called (username).github.io
- (If above step is needed): copy everything from this repo to the one just created
- run "npm install" from the terminal in the clarke-physio folder (or the corresponding folder in the other repository if you make a new one)
- run "npm run build" from the terminal in the clarke-physio folder
- check if it deployed to github pages
- make the CNAME file to link the domain you purchased
- On GoDaddy's DNS section, allow it to point the domain to username.github.io (not sure if this is the same as what we talked about before or not)
- Check github and godaddy to see if it's deployed

The above is just a general summary of what I gathered from the above links, please make sure to follow any directions in those links as well (i.e. creating a CNAME file, editing package.json, etc) <br>
Hopefully these were helpful, but please feel free to reach out directly and we'll do anything we can to help
