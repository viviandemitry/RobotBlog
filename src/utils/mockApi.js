const mockApi = [
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107253008-1686172940087-ryan.jpg?v=1695897054&w=884&h=442&vtcrop=y',
      title: 'GameStop names Ryan Cohen as CEO effective immediately',
      link: 'https://www.cnbc.com/2023/09/28/gamestop-names-ryan-cohen-as-ceo-effective-immediately.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107288223-16922892262023-08-17t161807z_230579945_rc2dlz9q4kll_rtrmadp_0_vinfast-mfg-trdg-usa-dealers.jpeg?v=1695884582&w=412&h=442&vtcrop=y',
      title: 'VinFast aims to sell up to 50,000 EVs in 2023 — but it’s far from its target',
      link: 'https://www.cnbc.com/2023/09/28/vinfast-aims-to-sell-up-to-50000-evs-in-2023-but-its-far-from-its-target.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107307718-1695846920017-gettyimages-1693652103-AFP_33WW2GR.jpeg?v=1695847029&w=412&h=206&vtcrop=y',        
      title: 'Meta CEO Zuckerberg eyes digital assistants, smart glasses, AI in metaverse push',
      link: 'https://www.cnbc.com/2023/09/27/meta-ceo-zuckerberg-looks-to-digital-assistants-ai-to-push-metaverse.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107307592-1695838100881-gettyimages-1704491000-_jhb3989_pt5jwnsd.jpeg?v=1695847852&w=412&h=206&vtcrop=y',  
      title: 'Microsoft CTO says company is getting more access to Nvidia’s AI chips',
      link: 'https://www.cnbc.com/2023/09/27/microsoft-technology-chief-says-supply-of-nvidia-ai-chips-is-improving.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107306930-1695753502265-Product_Style_1.jpg?v=1695834836&w=412&h=206&vtcrop=y',
      title: 'Meta announces new Quest 3 VR headset as Apple competition looms ',
      link: 'https://www.cnbc.com/2023/09/27/meta-announces-new-quest-3-vr-headset-as-apple-competition-looms-.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107304691-1695318487989-gettyimages-469965232-FLEXPORT_PETERSON.jpeg?v=1695828249&w=410&h=212&vtcrop=y',   
      title: 'Flexport fires CFO, HR chief departs weeks after sudden ouster of Dave Clark as CEO',
      link: 'https://www.cnbc.com/2023/09/27/flexport-loses-cfo-hr-chief-weeks-after-ouster-of-ceo-dave-clark.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/106952165-1633411367345-gettyimages-1173107599-MICROSOFT_HARDWARE.jpeg?v=1695833350&w=410&h=212&vtcrop=y', 
      title: 'Amazon hires former Microsoft product chief to oversee devices unit',
      link: 'https://www.cnbc.com/2023/09/27/amazon-hires-former-microsoft-product-chief-to-oversee-devices-unit.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107159164-1669831872804-gettyimages-1445795074-img_0531_28a51d8a-76e6-41a2-92eb-7471fc68ef28.jpeg?v=1695744240&w=410&h=212&vtcrop=y',
      title: 'FTC and 17 states sue Amazon on antitrust charges',
      link: 'https://www.cnbc.com/2023/09/26/ftc-and-17-states-sue-amazon-on-antitrust-charges.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107306081-1695663791652-Screenshot_2023-09-25_at_14113_PM.png?v=1695736192&w=410&h=212&vtcrop=y',
      title: 'Bitcoin miners beef up Texas operations ahead of extinction-level event',
      link: 'https://www.cnbc.com/2023/09/26/where-are-bitcoin-miners-in-2023-texas.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107306804-1695745320590-gettyimages-1702309268-_s2_4991_czaihtjn.jpeg?v=1695757307&w=410&h=212&vtcrop=y',  
      title: 'Apple’s Eddy Cue defends default search contract with Google in antitrust trial',
      link: 'https://www.cnbc.com/2023/09/26/apples-eddy-cue-defends-default-search-contract-with-google-in-trial.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107268892-1688996618217-gettyimages-1513200328-kaluthotage-notitle230707_npKjG.jpeg?v=1695722401&w=410&h=212&vtcrop=y',
      title: 'Meta’s Twitter-like Threads struggles to grow amid rivalry with Elon Musk’s X',
      link: 'https://www.cnbc.com/2023/09/26/metas-twitter-like-threads-tries-to-grow-amid-rivalry-with-elon-musks-x.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/105060036-GettyImages-931009486.jpg?v=1695718801&w=410&h=212&vtcrop=y',
      title: 'Apple exec Eddy Cue set to testify in Google trial about $19 billion search deal',
      link: 'https://www.cnbc.com/2023/09/26/apple-exec-eddy-cue-testify-google-trial-about-19-billion-search-deal.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107305197-1695392996262-gettyimages-1236320508-HM1_0873.jpeg?v=1695723140&w=410&h=212&vtcrop=y',
      title: 'AI chip firm Kneron raises $49 million as it looks to rival Nvidia',
      link: 'https://www.cnbc.com/2023/09/26/ai-chip-firm-kneron-raises-49-million-as-it-looks-to-rival-nvidia.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107278780-1690576706759-gettyimages-1576899703-kd_29521_fcqvjbfg.jpeg?v=1695818728&w=410&h=212&vtcrop=y',  
      title: '‘Cash-flow’ podcaster made off with millions in Ponzi scheme, SEC alleges',
      link: 'https://www.cnbc.com/2023/09/25/cash-flow-podcaster-made-off-with-millions-in-ponzi-scheme-sec.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107302669-1695077176614-iphone_15_pro.jpg?v=1695661597&w=410&h=212&vtcrop=y',
      title: 'iPhone 15 Pro analysis unveils Qualcomm modem and easier-to-repair phone frame',
      link: 'https://www.cnbc.com/2023/09/25/iphone-15-pro-has-qualcomm-modem-repairable-phone-frame-analysis.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107190514-1675809901600-msft.jpg?v=1695660561&w=410&h=212&vtcrop=y',
      title: 'Microsoft is hiring a nuclear energy expert to help power AI, cloud data centers',
      link: 'https://www.cnbc.com/2023/09/25/microsoft-is-hiring-a-nuclear-energy-expert-to-help-power-data-centers.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107297444-1694130441660-Oli-at-DASH-3.jpg?v=1695387601&w=410&h=212&vtcrop=y',
      title: 'New York is a tech startup hotbed after almost a decade-long run of IPOs',
      link: 'https://www.cnbc.com/2023/09/22/new-york-is-a-tech-startup-hotbed-after-almost-a-decade-of-ipos.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107304834-1695330557561-AP21022509988188.jpg?v=1695330700&w=410&h=212&vtcrop=y',
      title: 'Wall Street’s ‘meh’ response to tech IPOs shows Silicon Valley valuation problem',
      link: 'https://www.cnbc.com/2023/09/21/tech-ipos-get-meh-response-from-wall-street-arm-instacart-klaviyo.html'
    },
    {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/107168113-1671424575761-gettyimages-1264127380-1939061.jpeg?v=1695630025&w=410&h=212&vtcrop=y',
      title: 'Dawn Capital defies the venture downturn with $700 million in fresh funds',
      link: 'https://www.cnbc.com/2023/09/25/dawn-capital-defies-venture-capital-downturn-with-700-million-fund.html'
    }
  ]

  export default mockApi