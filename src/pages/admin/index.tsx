import CMS from 'netlify-cms-app'

const MyTemplate = (data: any) => {
    console.log(data);
    return (
        <div>AAAA</div>
    )
}


// Initialize the CMS object
CMS.init()
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate)