import React,{useState,useRef, useEffect, useCallback} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon,XCircleIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData,wardrobeData } from "@/data";

export function Home() {
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef(null);

  const sendDataToIframe = () => {
    const message = 'https://swap-ecom.vercel.app/img/apparel.png';
    if (iframeRef.current) {
      // Send data to the iframe if it's loaded
      console.log("Sending data to iframe");
      iframeRef.current.contentWindow.postMessage(message, '*');
    } else {
      console.error('Iframe not loaded yet');
    }
  };

  const handleClickOpen = () => {
    setShowIframe(true);
  };
  const handleClickClose = () => {
    setShowIframe(false);
  };
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[120%] w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-9xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className=" mt-32 font-black"
              >
                Welcome to Swap envi, <br/> where style meets innovation, and possibilities are limitless. <br/><br/>Let's swap the way you shop for fashion!
              </Typography>
              <br/>
              <Typography variant="h6" color="white" className="mt-4 opacity-80">
               Swap Envi - A revolutionary solution crafted by a Switzerland-based technology company, designed to revolutionize the way clothing brands interact with their customers. Swap empowers brands to integrate advanced AI technology, elevating their online shopping experience and unlocking unprecedented sales potential.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-15 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-36">
            <PageTitle heading="Our Mission"/>
            <Typography className="text-center px-10 pt-2" variant="lead">
              At Swap envi, our mission is to empower clothing brands to thrive in the digital age by providing them with the tools and technology they need to succeed. We believe in the power of innovation to drive growth and create meaningful connections between brands and their customers.
            </Typography>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <UsersIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Why Choose Swap?
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Swap envi is not just a virtual try-on company, it's a lifestyle.
                <br />
                <br />
                Discover the future of fashion exploration and redefine your style journey with us. Join swap envi today and relish the ease of hassle-free, virtual shopping. Your perfect look is just a click away!

              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/virtualtryon.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Our Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  We empower consumers to try on garments for size, fit, and style without physically wearing the product. Our cutting-edge technology creates a lifelike virtual representation of the product, seamlessly overlaying it onto the customer's real-world image to showcase how the product would look on their body.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Typography variant="h3" className="mt-10 text-center">Why choose our Virtual Wardrobe solution ?</Typography>
        <div className="mx-auto mt-20 mb-10 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {wardrobeData.map(({ title, icon, description }) => (
            <Card
              key={title}
              color="transparent"
              shadow={false}
              className="text-center text-blue-gray-900"
            >
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                {React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                {description}
              </Typography>
            </Card>
          ))}
        </div>
      </section>
      <section className="px-4 pt-20 pb-20">
        <div className="container mx-auto">
          <PageTitle heading="Try our Virtual Try-On">
          Click the 'Try It On' button below to experience it firsthand and witness the difference for yourself!
          </PageTitle>
          <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center gap-5 lg:mt-30">
            <Card className="p-4">
                <img src={'/img/apparel.png'}></img>
                <Button className="" onClick={handleClickOpen} >Try On</Button>
            </Card>
            {showIframe && (
              <div className="mt-10">
                <Button onClick={handleClickClose} style={{position:"relative",left:"11em", bottom:"0.5em"}}>Close Try-On</Button>
                <iframe
                  // id = "iframeRef"
                  ref={iframeRef}
                  src={import.meta.env.VITE_IFRAME_URL}
                  width="410"
                  height="660"
                  title="example iframe"
                  onLoad={()=>{
                    console.log("iframe loaded");
                    setTimeout(() => {
                      sendDataToIframe();
                    }, 100);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build your brand - with AI Powered Solutions" className="">
          Swap envi harnesses the latest in AI technology to revolutionize your operations. Our virtual try-on feature not only increases conversion rates for products with try-on enabled but also amplifies the number of items viewed. This dynamic combination drives sales growth, minimise returns, transforming your experience with swap envi.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
