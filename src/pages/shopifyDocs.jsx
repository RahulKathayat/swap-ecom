import React, { useEffect, useState } from 'react'
import { Typography } from '@material-tailwind/react';
import { Footer } from '@/widgets/layout';
import CodeBlockWithCopy from '../widgets/cards/CodeBlockWithCopy';
export function ShopifyDocs() {
  return (
    <>
        <section className="relative block h-[12vh]">
            <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section>
        <div className=' min-h-[90vh] w-[100vw] p-10 mx-auto flex items-center flex-col gap-7'>
          <Typography variant='h1'>Shopify Integration</Typography>
          <Typography variant='h3' className='mt-5 scale-110 tracking-wider'>Overview </Typography>
          <Typography variant='lead' className='max-w-5xl text-xl tracking-wider'>The following examples show how Zyler Go will look when you integrate it into your Shopify site. The next section explains the simple steps required to achieve this.</Typography>
          <Typography variant='h3' className='mt-5 scale-110 tracking-wider'>Integration steps </Typography>
          <Typography variant='lead' className='max-w-5xl text-xl tracking-wider mb-5'>There are three simple steps for integrating Swap Envi on Shopify:</Typography>
          <Typography variant='lead' className='text-2xl tracking-widest'>1. Including the Script</Typography>
          <Typography variant='lead' className='text-2xl tracking-widest '>2. Styling using CSS</Typography>
          <Typography variant='lead' className='text-2xl tracking-widest '>3. Customizing your Theme</Typography>
          <Typography variant='h3' className='scale-110 tracking-widest mt-8'>Step 1: Including the Script </Typography>
          <Typography variant='lead' className='max-w-5xl  text-2xl tracking-wider font-light'>Copy and paste the script as a "Custom Liquid" block in the "Footer" section of your website. To do this:</Typography>
          <Typography variant='lead' className='max-w-5xl w-5xl text-2xl tracking-wider font-light text-start'>1. Navigate to "Sales channels" --&gt; "Online Store" --&gt; "Themes".</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>2. Click "Customize" on your current theme, as below :</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>3. On "Home page", find the "Footer" section and click "Add section", as shown in the following:</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>4. Select "Custom Liquid", as highlighted in the image below:</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>5. Click into the new Custom Liquid block and copy and paste the script below into the "Liquid code" textbox, replacing &lt;partner-id&gt; with your value from the Partner Portal.</Typography>
          <CodeBlockWithCopy codeString={`<script partner-id="<partner-id>" src="https://www.zyler.com/js/go-integration/v1/index.js"></script>`} />
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>6. Scroll down to "Section Padding" within the Custom Liquid block and use the sliders to set the padding to 0:</Typography>
          <Typography variant='h3' className='scale-110 tracking-widest mt-8'>Step 2: Styling using CSS </Typography>
          <Typography variant='lead' className='max-w-5xl  text-2xl tracking-wider font-light'>To style your Try On buttons, copy and paste the following CSS into the same section as the script, either above or below it. You can edit it to match the brand of your website as you see fit.</Typography>
          <CodeBlockWithCopy codeString={`<style>
  .zyler-try-on-cta {
    width: 100%;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: #f0eff0;
    }
  }
</style>`} />
          <Typography variant='h3' className='scale-110 tracking-widest mt-8'>Step 3: Customizing your Theme </Typography>
          <Typography variant='lead' className='max-w-5xl  text-2xl tracking-wider font-light'>The PLP and PDP need to be customized separately:</Typography>
          <Typography variant='lead' className='mt-10 px-10 py-5 max-w-5xl text-center
           bg-blue-100 text-blue-800 scale-110 rounded-lg tracking-wider'>
            Note :<div/>
            In these examples, a default Shopify theme of "Dawn" is used. The names of the files being edited in each section may differ if you are using a custom theme.
          </Typography>
          <Typography variant='h5' className='scale-110 tracking-widest mt-8'>PLP Customizations </Typography>
          <Typography variant='lead' className='max-w-5xl w-5xl text-2xl tracking-wider font-light text-start'>1. Navigate to "Sales channels" --&gt; "Online Store" --&gt; "Themes".</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>2. Click "Customize" on your current theme</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>3. Click on the three dots in the upper left corner of the screen and select "Edit code", as below:</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>4. Use the search facility to find "card-product.liquid" and click the pencil icon to edit this file, circled below:</Typography>
          <Typography variant='lead' className='mt-10 px-10 py-5 max-w-5xl text-center
           bg-blue-100 text-blue-800 scale-110 rounded-lg tracking-wider'>
            Note :<div/>
            For the default Shopify themes, this file defines the product card that appears on the catalog page within Shopify. The name and contents of this page may vary depending on your theme and shop preferences.
          </Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>5. Find a suitable location within the file where you want to add the button. In our example, the button appears under the product price. This was achieved by finding and using the first instance of the phrase render 'price' as the suitable location.</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>6. Copy and paste the following code on a new line under the location found in the previous step:</Typography>
            <CodeBlockWithCopy codeString={`<button class="zyler-try-on-cta zyler-hide button" data-outfit-handle="{{card_product.handle}}">Try On</button>`} />
          <Typography variant='lead' className='mt-10 px-10 py-5 max-w-5xl text-center
           bg-blue-100 text-blue-800 scale-110 rounded-lg tracking-wider'>
            Note :<div/>
            The card_product.handle variable within the button code snippet above is a Shopify Liquid variable. This is used to retrieve the handle of each product for interfacing with Swap Envi.
          </Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>7. Click "Save"</Typography>
          
          <Typography variant='h5' className='scale-110 tracking-widest mt-8'>PDP Customizations </Typography>
          <Typography variant='lead' className='max-w-5xl w-5xl text-2xl tracking-wider font-light text-start'>1. Navigate to "Sales channels" --&gt; "Online Store" --&gt; "Themes".</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>2. Click "Customize" on your current theme</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>3. Access your PDP by using the dropdown in the top middle of the screen and navigate to "Products" -&gt; "Default product", as below:</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>4. Under "Template" on the left of the screen, find "Product information" and click "Add block", see the following screenshot:</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>5. Select "Custom Liquid" from the list of blocks:</Typography>
          <Typography variant='lead' className='mt-10 px-10 py-5 max-w-5xl text-center
           bg-blue-100 text-blue-800 scale-110 rounded-lg tracking-wider'>
            Note :<div/>
            If you are not using a default Shopify theme, Custom Liquid may have a different name such as just "Liquid".
          </Typography>

          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>6. Click into the new Custom Liquid block and copy and paste the following code into the "Liquid code" textbox:</Typography>
            <CodeBlockWithCopy codeString={`<button class="zyler-try-on-cta zyler-hide button" data-outfit-handle="{{product.handle}}">Try On</button>`} />
          <Typography variant='lead' className='mt-10 px-10 py-5 max-w-5xl text-center
           bg-blue-100 text-blue-800 scale-110 rounded-lg tracking-wider'>
            Note :<div/>
            The product.handle variable within the button code snippet above is a Shopify Liquid variable. This is used to retrieve the handle of the product for interfacing with Swap Envi.
          </Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>7. As mentioned previously, you have control over the position, text and style of these buttons. Use the drag handle in the following image to rearrange your blocks as you see fit for your site. In the examples above, the button is positioned underneath the price:</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'>8. Click "Save"</Typography>
          <Typography variant='lead' className='max-w-5xl text-2xl tracking-wider font-light'> This completes the integration steps. Swap Envi is now part of your Shopify site.</Typography>
        </div>
        <div className="bg-white">
            <Footer/>
        </div>
    </>
  )
}

export default ShopifyDocs
