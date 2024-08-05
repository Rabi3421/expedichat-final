import ServiceIconOne from "../svg/service/service-icon-1";
import ServiceIconTwo from "../svg/service/service-icon-2";
import ServiceIconThree from "../svg/service/service-icon-3";
import ServiceIconFoure from "../svg/service/service-icon-4";
import ServiceIconFive from "../svg/service/service-icon-5";
import ServiceIconsix from "../svg/service/service-icon-6";
import ServiceIconSeven from "../svg/service/service-icon-7";

// images import
import img_1 from "../../public/assets/img/service/summarizer.webp";
import img_2 from "../../public/assets/img/service/PPT-Generator.webp";
import img_3 from "../../public/assets/img/service/Image-to-Text.webp";
import img_4 from "../../public/assets/img/service/Humanize-content.webp";
import img_5 from "../../public/assets/img/service/Assured-Seo.webp";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png";
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png";
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png";
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png";

// for home 05
import img_6 from "../../public/assets/img/service/Scanned-to-Native-pdf.webp";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";


// for Paid tools main images
import Scanned_Native_main_img from "../../public/assets/img/service/Scanned_Native_main_img.webp";
import Summarizer_main_img  from "../../public/assets/img/service/Summarizer_main_img.webp";
import PPT_Generator_main_img from "../../public/assets/img/service/PPT_Generator_main_img.webp";
import Convert_Images_main_img from "../../public/assets/img/service/Convert_Images_main_img.webp";
import humanize_main_img from "../../public/assets/img/service/humanize_main_img.webp";
import Assured_SEO_main_img from "../../public/assets/img/service/Assured_SEO_main_img.webp";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";

export const paid_tools_data = [
  // for home 01
  {
    id: 1,
    icon: img_1,
    img: img_1,
    title: "Summarizer",
    description: (
      <>
        Condense lengthy articles, reports, and documents into concise,
        easy-to-read summaries without losing key information.
      </>
    ),
    delay: ".4s",
    slug: "summarizer"  
  },
  {
    id: 2,
    icon: img_2,
    img: img_2,
    title: "PPT Generator",
    description: (
      <>
        Choose from sleek, professional templates tailored to your needs to
        create impactful presentations quickly and easily.
      </>
    ),
    delay: ".6s",
    slug: "ppt-generator",
  },
  {
    id: 3,
    icon: img_3,
    img: img_3,
    title: "Image to Text",
    description: (
      <>
        Extract text from images with the help of advanced AI technology for
        easy extraction and information retrieval.
      </>
    ),
    delay: ".7s",
    slug: "image-to-text",
  },
  {
    id: 4,
    icon: img_4,
    img: img_4,
    title: "Humanize content",
    description: (
      <>
        Transform your AI content into human-like text, crafting narratives that
        resonate with genuine emotion and relatability.
      </>
    ),
    delay: ".9s",
    slug: "humanize-content",
  },

  // for home 03
  {
    id: 5,
    icon: img_5,
    img: img_5,
    title: "Assured Seo",
    description: (
      <>
        Boost visibility with targeted SEO keywords to ensure top search engine
        rankings and increased online prominence.
      </>
    ),
    delay: ".9s",
    slug: "assured-seo",
  },
  {
    id: 6,
    icon: img_6,
    img: img_6,
    title: "Scanned to Native pdf",
    description: (
      <>
        Convert your PDFs without losing quality and experience the convenience
        of hassle-free PDF conversions with this intuitive tool.
      </>
    ),
    delay: ".8s",
    slug: "scanned-to-native-pdf",
  },
];

export const paid_tools_details = [
  {
    id: 1,
    tool_title: "Assured SEO",
    main_img : Assured_SEO_main_img,
    slug: "assured-seo",
    sidebar: {
      heading: "Start ranking higher and attract more visitors",
      desc: "Try this Powerful tool to craft SEO-optimized content",
      ctaLink: "http://localhost:3030/ai-tools/ppt_data",
    },
    categorys: [
      { id: 1, slug: "assured-seo", category: "Assured SEO", cls: "active" },
      {
        id: 2,
        slug: "humanize-content",
        category: "Humanize Content",
        cls: "",
      },
      { id: 3, slug: "ppt-generator", category: "PPT Generator", cls: "" },
      { id: 4, slug: "summarizer", category: "Summarizer", cls: "" },
      { id: 5, slug: "image-to-text", category: "Image to Text", cls: "" },
      {
        id: 6,
        slug: "scanned-to-native-pdf",
        category: "Scanned to Native PDF",
        cls: "",
      },
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Transform Your Content Strategy with Assured SEO",
    overview_des: (
      <>
        A tool to craft SEO-optimized content that guarantees top search engine
        ranking. The best SEO-generated content tool is here to boost your
        website’s search engine rankings with the SEO Content Writing tool.
      </>
    ),
    overview_title: "Ensure Peak Performance with this tool",
    overview_list: [
      <>
        Content that Tops Search Rankings: <br />{" "}
        <span>
          Maximize your visibility and ensure that your audience finds you
          easily.
        </span>
      </>,
      <>
        Maximize Visibility: <br />{" "}
        <span>
          It enhances your online presence by generating SEO-optimized content.
        </span>
      </>,
      <>
        Drive Massive Traffic:{" "}
        <span>
          The humanize AI-generated tool helps to drive massive traffic to your
          website.
        </span>
      </>,
    ],

    challange_titel: "Gain Market Trust with an Assured SEO tool",
    challange_des: (
      <>
        People trust top search results. With our tool, your content will be
        viewed as the best in the market So, Transform your SEO strategy and
        achieve unprecedented success
      </>
    ),
    faqs_data: [
      {
        id: 1,
        question:
          "How does the AI-generated content transformation tool enhance readability?",
        answer: (
          <>
            The tool optimizes AI-generated text to include humanized texts and
            adds an emotional appeal, making it easier for readers to engage
            with and understand the content, catering to writers, students,
            professionals, and anyone interested in expressive writing.
          </>
        ),
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_controls: "collapseOne",
        actice: "",
      },
      {
        id: 2,
        question: "Who benefits from using this AI text converter tool?",
        answer: (
          <>
            Writers, students, professionals, and enthusiasts of expressive
            writing find immense value in this tool, as it efficiently
            transforms AI-generated content into readable text with added
            emotion, saving time and boosting productivity in various fields.
          </>
        ),
        accordion_id: "headingTwo",
        collapsed: "",
        data_bs_target: "#collapseTwo",
        aria_expanded: true,
        aria_controls: "collapseTwo",
        show: true,
        actice: "",
      },
      {
        id: 3,
        question:
          "What makes this tool ideal for enhancing content comprehension?",
        answer: (
          <>
            By Pasting AI-generated text with human-like qualities and emotional
            depth, the tool ensures that the content resonates effectively with
            readers of all backgrounds and interests, facilitating better
            understanding and engagement across different audiences.
          </>
        ),
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_controls: "collapseThree",
        actice: "",
      },
      {
        id: 4,
        question:
          "How does this tool contribute to productivity in writing and related fields?",
        answer: (
          <>
            This AI text converter streamlines the process of creating
            compelling, easy-to-understand content, thereby saving significant
            time and enhancing productivity for writers, professionals, and
            anyone seeking to communicate effectively through written
            expression.{" "}
          </>
        ),
        accordion_id: "headingFour",
        collapsed: "collapsed",
        data_bs_target: "#collapseFour",
        aria_controls: "collapseFour",
        actice: "",
      },
      {
        id: 5,
        question:
          " What makes an assured SEO tool different from other content generation tools?",
        answer: (
          <>
            An assured SEO tool stands out from other content generation tools
            because it covers all the areas of SEO optimization. In contrast to
            more conventional tools, it guarantees that the content generated
            from this tool is SEO-friendly, and at the same time, it also helps
            to increase the rank of the Google website.
          </>
        ),
        accordion_id: "headingFive",
        collapsed: "collapsed",
        data_bs_target: "#collapseFive",
        aria_controls: "collapseFive",
        actice: "",
      },
    ],
  },

  {
    id: 2,
    tool_title: "Humanize Content",
    main_img : humanize_main_img,
    slug: "humanize-content",
    sidebar: {
      heading: "Craft content that hooks hearts and minds.",
      desc: "Elevate your content and leave a lasting impression.",
      ctaLink: "http://localhost:3030/ai-tools/ppt_data",
    },
    categorys: [
      { id: 1, slug: "assured-seo", category: "Assured SEO", cls: "" },
      {
        id: 2,
        slug: "humanize-content",
        category: "Humanize Content",
        cls: "active",
      },
      { id: 3, slug: "ppt-generator", category: "PPT Generator", cls: "" },
      { id: 4, slug: "summarizer", category: "Summarizer", cls: "" },
      { id: 5, slug: "image-to-text", category: "Image to Text", cls: "" },
      {
        id: 6,
        slug: "scanned-to-native-pdf",
        category: "Scanned to Native PDF",
        cls: "",
      },
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Humanize Content for Authentic and Engaging SEO",
    overview_des: (
      <>
        Converting AI-written content for an easy-to-read version is almost
        effortless. With this tool, one will be able to avoid the following
        problems related to the manual writing of effective, engaging matters
        that would conform to SEO recommendations.
      </>
    ),
    features_title: "Benefits of Humanizing Your Content",
    overview_list: [
      <>
        Enhanced User Engagement: <br />{" "}
        <span>
          Converts AI-generated text into engaging, human-like content.
        </span>
      </>,
      <>
        Time Efficiency: <br />{" "}
        <span>
          Facilitates easy transformation of AI text into readable content.
        </span>
      </>,
      <>
        SEO Compatibility:{" "}
        <span>
          Ensures SEO-friendly content with natural language integration.
        </span>
      </>,
    ],

    challange_titel: "Improve SEO Rankings with Humanized Content",
    challange_des: (
      <>
        The Humanize content tool assists in boosting SEO performance and
        focuses on creating content that can be understood by humans for the
        same reason it always appeals to search engines. This tool can easily
        convert AI-written content into more human-oriented text.
      </>
    ),
    faqs_data: [
      {
        id: 1,
        question: "How does the Humanize content tool enhance readability?",
        answer: (
          <>
            The tool enhances the AI-produced texts into humanized text with an
            inclination towards applicability and style, it produces an engaging
            and easy-to-follow version of the text as it is useful for writers,
            students, professionals, and anyone interested in writing
            expressively.
          </>
        ),
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_controls: "collapseOne",
        actice: "",
      },
      {
        id: 2,
        question: "Who benefits from using this AI text converter tool?",
        answer: (
          <>
            This tool is incredibly useful for writers or students who need to
            produce creative writing, professionals who want to enhance their
            productivity in the creative process, and enthusiasts of expressive
            writing because it helps you convert AI-produced writings into
            readable texts with added emotions much faster.
          </>
        ),
        accordion_id: "headingTwo",
        collapsed: "",
        data_bs_target: "#collapseTwo",
        aria_expanded: true,
        aria_controls: "collapseTwo",
        show: true,
        actice: "",
      },
      {
        id: 3,
        question:
          "What makes this tool ideal for enhancing content comprehension?",
        answer: (
          <>
            By Overcoming AI-generated text with human attributes, quality, and
            Emotional Intelligence, the tool enhances the quality of the text to
            effectively connect with readers from all over the spectrum to
            enhance their understanding of any topic that may be passed on to
            them.
          </>
        ),
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_controls: "collapseThree",
        actice: "",
      },
      {
        id: 4,
        question:
          "How does this tool contribute to productivity in writing and related fields?",
        answer: (
          <>
            This AI text converter helps in writing worthy, clear, and concise
            text faster and more efficiently reducing the amount of time that
            would be used by writers, professionals, or anyone needing to write
            as a way of passing a message.{" "}
          </>
        ),
        accordion_id: "headingFour",
        collapsed: "collapsed",
        data_bs_target: "#collapseFour",
        aria_controls: "collapseFour",
        actice: "",
      },
      {
        id: 5,
        question: "Is the output from Humanize AI plagiarism-free?",
        answer: (
          <>
            Definitely, The Humanize content tool does not provide the output
            from copying content and this therefore means originality and
            uniqueness.{" "}
          </>
        ),
        accordion_id: "headingFive",
        collapsed: "collapsed",
        data_bs_target: "#collapseFive",
        aria_controls: "collapseFive",
        actice: "",
      },
    ],
  },

  {
    id: 3,
    tool_title: "PPT Generator",
    main_img : PPT_Generator_main_img,
    slug: "ppt-generator",
    sidebar: {
      heading: "Achieve Engaging presentations with Expedichat",
      desc: "Get Started Now and Make Every Presentation a Masterpiece!",
      ctaLink: "http://localhost:3030/ai-tools/ppt_data",
    },
    categorys: [
      { id: 1, slug: "assured-seo", category: "Assured SEO", cls: "" },
      {
        id: 2,
        slug: "humanize-content",
        category: "Humanize Content",
        cls: "",
      },
      {
        id: 3,
        slug: "ppt-generator",
        category: "PPT Generator",
        cls: "active",
      },
      { id: 4, slug: "summarizer", category: "Summarizer", cls: "" },
      { id: 5, slug: "image-to-text", category: "Image to Text", cls: "" },
      {
        id: 6,
        slug: "scanned-to-native-pdf",
        category: "Scanned to Native PDF",
        cls: "",
      },
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Best AI Presentation Maker",
    overview_des: (
      <>
        An AI-powered Application that not only provides a wide range of
        templates but successfully arranges the content perfectly in detail and
        it also helps guarantees to offer a variety of templates according to
        the need Whether you are preparing a pitch, a report, or a lecture it
        helps to capture the attention of the audience.
      </>
    ),
    features_title: "Features of Presentation Maker AI",
    overview_list: [
      <>
        Multiple Templates: <br />{" "}
        <span>
          Plenty of templates are tailored for students, professionals, and
          various work requirements.
        </span>
      </>,
      <>
        User-Friendly Interface: <br />{" "}
        <span>
          It's user-friendly, making any work easily presentable by anyone.
        </span>
      </>,
      <>
        Content Precision:{" "}
        <span>
          Generates clear, relevant presentations that precisely emphasize your
          message.
        </span>
      </>,
    ],

    challange_titel: "Reasons to Choose the Top AI Presentation Maker",
    challange_des: (
      <>
        The Best AI Presentation Maker is here to create an outstanding
        presentation. Anyone can easily create it by using the application since
        the interface is simple, and one does not need to embody any technical
        knowledge. This makes it easier for anyone who selects this tool, to be
        able to work through it relatively easily and come up with a presentable
        PowerPoint presentation in not more than a few minutes.
      </>
    ),
    faqs_data: [
      {
        id: 1,
        question:
          "What makes ExpediChat stand out as the best AI presentation maker?",
        answer: (
          <>
            ExpediChat excels as the best AI presentation maker due to its
            intuitive template selection, seamless data integration from
            user-uploaded folders, and customizable sliders for tailored
            presentations. Its fusion of user-friendly features and advanced AI
            functionality sets it apart in delivering dynamic presentations
            effortlessly
          </>
        ),
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_controls: "collapseOne",
        actice: "",
      },
      {
        id: 2,
        question:
          "Does ExpediChat offer customizable templates for different presentation styles?",
        answer: (
          <>
            Yes, ExpediChat offers multiple templates that users can choose
            accordingly. Whether you are a professional or a student, you can
            choose the template according to your requirements. These are the
            specialties of ExpediChat that make the application the best AI
            presentation maker, creating presentations with engaging content and
            amazing visuals.
          </>
        ),
        accordion_id: "headingTwo",
        collapsed: "",
        data_bs_target: "#collapseTwo",
        aria_expanded: true,
        aria_controls: "collapseTwo",
        show: true,
        actice: "",
      },
      {
        id: 3,
        question:
          "Is ExpediChat suitable for both personal and professional presentation needs?",
        answer: (
          <>
            Yes, it's an ideal application for crafting captivating
            presentations, designed to effectively engage your audience,
            boasting high-quality visuals and HD backgrounds.
          </>
        ),
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_controls: "collapseThree",
        actice: "",
      },
      {
        id: 4,
        question:
          "Is ExpediChat user-friendly for individuals with limited technical skills?",
        answer: (
          <>
            Expedichat boasts a completely user-friendly interface, accessible
            to anyone. Users don't have to worry about the prompts as it is not
            necessary just input their basic requirements, and the best AI
            presentation maker will swiftly craft your presentation.{" "}
          </>
        ),
        accordion_id: "headingFour",
        collapsed: "collapsed",
        data_bs_target: "#collapseFour",
        aria_controls: "collapseFour",
        actice: "",
      },
      {
        id: 5,
        question: "How to Use Our Online Presentation Maker?",
        answer: (
          <>
            Steps to Create a Presentation with Online Presentation Maker:{" "}
            <br /> <li>Choose a Template.</li>{" "}
            <li>Enter the title of your presentation.</li>{" "}
            <li>Enter presenter name.</li>{" "}
            <li>Upload a doc file that contains the Data.</li>{" "}
            <li>Enter the text you want to add to the presentation.</li>{" "}
            <li>Enter the number of slides according to the requirement.</li>{" "}
          </>
        ),
        accordion_id: "headingFive",
        collapsed: "collapsed",
        data_bs_target: "#collapseFive",
        aria_controls: "collapseFive",
        actice: "",
      },
    ],
  },

  {
    id: 4,
    tool_title: "Summarizer",
    main_img : Summarizer_main_img,
    slug: "summarizer",
    sidebar: {
      heading: "Summarize Content for Authentic Engagement",
      desc: "Make information concise and engaging for readers.",
      ctaLink: "http://localhost:3030/ai-tools/ppt_data",
    },
    categorys: [
      { id: 1, slug: "assured-seo", category: "Assured SEO", cls: "" },
      {
        id: 2,
        slug: "humanize-content",
        category: "Humanize Content",
        cls: "",
      },
      { id: 3, slug: "ppt-generator", category: "PPT Generator", cls: "" },
      { id: 4, slug: "summarizer", category: "Summarizer", cls: "active" },
      { id: 5, slug: "image-to-text", category: "Image to Text", cls: "" },
      {
        id: 6,
        slug: "scanned-to-native-pdf",
        category: "Scanned to Native PDF",
        cls: "",
      },
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Summarize Content for Authentic Engagement:",
    overview_des: (
      <>
        Summarizing content makes information shorter and more engaging for your
        audience. Tools like Summarizer simplify complex information without
        losing its essence, making it easier to read and appreciate. This
        improves readability and satisfaction for readers.
      </>
    ),
    features_title: "Benefits The Summarizer Tool:",
    overview_list: [
      <>
        Simplifies Complex Content: <br />{" "}
        <span>
          Converts difficult information into easy-to-understand summaries.
        </span>
      </>,
      <>
        Enhances Reading Efficiency: <br />{" "}
        <span>Improves how quickly you digest and comprehend content.</span>
      </>,
      <>
        Promotes Productive Reading:{" "}
        <span>Helps you extract key information efficiently.</span>
      </>,
    ],

    challange_titel: "Key Point",
    challange_des: (
      <>
        By simplifying the flow of information, Summarizer keeps readers
        engaged. They can grasp the key points quickly without feeling
        overwhelmed by lengthy details.
      </>
    ),
    faqs_data: [
      {
        id: 1,
        question: "Does Summarizer ignore critical information?",
        answer: (
          <>
            Summarizer focuses on significant information items but also tries
            to retain content characteristics as much as possible. To have a
            detailed analysis, it is always advised to refer back to the source
            document.
          </>
        ),
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_controls: "collapseOne",
        actice: "",
      },
      {
        id: 2,
        question: "Does Summarizer work with any content?",
        answer: (
          <>
            Thus, Summarizer is more effective with the articles, reports, or
            research papers kind of texts. That is why it is not suitable for
            creative writing or when one writes articles with detailed or highly
            differentiated content.
          </>
        ),
        accordion_id: "headingTwo",
        collapsed: "",
        data_bs_target: "#collapseTwo",
        aria_expanded: true,
        aria_controls: "collapseTwo",
        show: true,
        actice: "",
      },
      {
        id: 3,
        question:
          "Is Summarizer completely free of charge and can be downloaded by anyone?",
        answer: (
          <>
            It is available to have Summarizer Free and Summarizer Pro in
            multiple languages. Generally, the free ones are often stripped of
            certain features, and the full versions need to be bought.
          </>
        ),
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_controls: "collapseThree",
        actice: "",
      },
      {
        id: 4,
        question: "How accurate are Summarizers?",
        answer: (
          <>
            Completing the accuracy type, I should mention that it might be
            different in case of using specific tools and with the increased
            complexity of the content. As it has been stated, it may always be
            helpful to skim through the original text having used Summarizer.{" "}
          </>
        ),
        accordion_id: "headingFour",
        collapsed: "collapsed",
        data_bs_target: "#collapseFour",
        aria_controls: "collapseFour",
        actice: "",
      },
      {
        id: 5,
        question:
          "In what ways can Summarizer help me to make content more interesting?",
        answer: (
          <>
            Summaries may be used to start a discussion or as a discussion
            opener. They can also assist to formulate specific and brief social
            media messages focusing specific points.{" "}
          </>
        ),
        accordion_id: "headingFive",
        collapsed: "collapsed",
        data_bs_target: "#collapseFive",
        aria_controls: "collapseFive",
        actice: "",
      },
    ],
  },

  {
    id: 5,
    tool_title: "Image to Text",
    main_img : Convert_Images_main_img,
    slug: "image-to-text",
    sidebar: {
      heading: "Simplify Text Extraction from Images",
      desc: "Effortlessly transform your visuals into editable content.",
      ctaLink: "http://localhost:3030/ai-tools/ppt_data",
    },
    categorys: [
      { id: 1, slug: "assured-seo", category: "Assured SEO", cls: "" },
      {
        id: 2,
        slug: "humanize-content",
        category: "Humanize Content",
        cls: "",
      },
      { id: 3, slug: "ppt-generator", category: "PPT Generator", cls: "" },
      { id: 4, slug: "summarizer", category: "Summarizer", cls: "" },
      {
        id: 5,
        slug: "image-to-text",
        category: "Image to Text",
        cls: "active",
      },
      {
        id: 6,
        slug: "scanned-to-native-pdf",
        category: "Scanned to Native PDF",
        cls: "",
      },
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Convert Images into Editable Text with Precision and Ease",
    overview_des: (
      <>
        Unlock the potential of your images by converting them into editable
        text with our premium "Image to Text" tool. Whether you're dealing with
        scanned documents, handwritten notes, or printed materials, our tool
        provides a seamless and accurate conversion experience.
      </>
    ),
    features_title: "What's Included",
    overview_list: [
      <>
        Precision Accuracy: <br />{" "}
        <span>
          Enjoy high accuracy in text extraction, ensuring minimal errors.
        </span>
      </>,
      <>
        Immediate Conversion: <br />{" "}
        <span>Experience fast processing times for instant results.</span>
      </>,
      <>
        Accurate Formatting:{" "}
        <span>
          Maintain the original formatting of your text, making it easy to read
          and edit.
        </span>
      </>,
    ],

    challange_titel: "How It works",
    challange_des: (
      <>
        Our Image to Text tool uses advanced technology to scan your images and
        turn them into text. Just upload your image, and within seconds, you'll
        get editable text for your projects, documents, or any other use.
      </>
    ),
    faqs_data: [
      {
        id: 1,
        question: "What types of images can I convert?",
        answer: (
          <>
            You can convert various types of images, including scanned
            documents, screenshots, and photos of text.
          </>
        ),
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_controls: "collapseOne",
        actice: "",
      },
      {
        id: 2,
        question:
          " Is there a limit to the amount of text that can be converted?",
        answer: (
          <>
            There are no strict limits, but for best results, we recommend using
            images with clear and legible text.
          </>
        ),
        accordion_id: "headingTwo",
        collapsed: "",
        data_bs_target: "#collapseTwo",
        aria_expanded: true,
        aria_controls: "collapseTwo",
        show: true,
        actice: "",
      },
      {
        id: 3,
        question: "How accurate is the conversion process?",
        answer: (
          <>
            Our tool offers precision accuracy, ensuring that the converted text
            is as close to the original as possible.
          </>
        ),
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_controls: "collapseThree",
        actice: "",
      },
      {
        id: 4,
        question: "Can I use the converted text for commercial purposes?",
        answer: (
          <>
            Yes, you can use the converted text for any purpose, including
            commercial use.{" "}
          </>
        ),
        accordion_id: "headingFour",
        collapsed: "collapsed",
        data_bs_target: "#collapseFour",
        aria_controls: "collapseFour",
        actice: "",
      },
      {
        id: 5,
        question: "How secure is my data during the conversion process?",
        answer: (
          <>
            Your data is handled with the utmost security, ensuring that your
            images and text remain confidential and protected.{" "}
          </>
        ),
        accordion_id: "headingFive",
        collapsed: "collapsed",
        data_bs_target: "#collapseFive",
        aria_controls: "collapseFive",
        actice: "",
      },
    ],
  },

  {
    id: 6,
    tool_title: "Scanned to Native PDF",
    main_img : Scanned_Native_main_img,
    slug: "scanned-to-native-pdf",
    sidebar: {
      heading: "Effortless Digital Access",
      desc: "Access and edit your scanned documents with ease.",
      ctaLink: "http://localhost:3030/ai-tools/ppt_data",
    },
    categorys: [
      { id: 1, slug: "assured-seo", category: "Assured SEO", cls: "" },
      {
        id: 2,
        slug: "humanize-content",
        category: "Humanize Content",
        cls: "",
      },
      { id: 3, slug: "ppt-generator", category: "PPT Generator", cls: "" },
      { id: 4, slug: "summarizer", category: "Summarizer", cls: "" },
      { id: 5, slug: "image-to-text", category: "Image to Text", cls: "" },
      {
        id: 6,
        slug: "scanned-to-native-pdf",
        category: "Scanned to Native PDF",
        cls: "active",
      },
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Convert Scanned Files into Editable PDFs",
    overview_des: (
      <>
        Scanned to Native PDF, our premium tool, helps you change scanned
        documents into PDF documents that can be edited. Say goodbye to retyping
        or complicated editing as you get easy digital access to your copied
        text.
      </>
    ),
    features_title: "Features of Scanned to Native PDF:",
    overview_list: [
      <>
        Effortless Conversion: <br />{" "}
        <span>
          Convert your scans to editable PDFs in a snap and do it with ease and
          let’s make your workflow more efficient.
        </span>
      </>,
      <>
        Enhanced Productivity: <br />{" "}
        <span>
          Reduce on the time as well as the effort required to make entries
          manually. Revise and arrange your documents in a digital manner ,
          hence easing your work.
        </span>
      </>,
      <>
        Improved Accessibility:{" "}
        <span>
          Ensure that your documents are friendly for every user through the use
          of editable text and thus making them more useful for collaboration.
        </span>
      </>,
    ],

    challange_titel: "How It Works",
    challange_des: (
      <>
        Simply upload your scanned document to our platform, and our tool will
        automatically convert it into a native PDF. Once the conversion is
        complete, you can access and edit the PDF as needed, enjoying the
        convenience of digital documents.
      </>
    ),
    faqs_data: [
      {
        id: 1,
        question: "How accurate is the text extraction?",
        answer: (
          <>
            When it comes to the text extraction process, our Scanned to Native
            PDF tool boasts of high precision to help maintain document quality.
          </>
        ),
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_controls: "collapseOne",
        actice: "",
      },
      {
        id: 2,
        question: "Can I edit the converted PDFs?",
        answer: (
          <>
            Yes, once converted, the PDFs are fully editable, allowing you to
            make any necessary changes easily.
          </>
        ),
        accordion_id: "headingTwo",
        collapsed: "",
        data_bs_target: "#collapseTwo",
        aria_expanded: true,
        aria_controls: "collapseTwo",
        show: true,
        actice: "",
      },
      {
        id: 3,
        question: "Is the formatting preserved during conversion?",
        answer: (
          <>
            Absolutely. Our tool maintains the original formatting and layout of
            your documents for a professional appearance.
          </>
        ),
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_controls: "collapseThree",
        actice: "",
      },
      {
        id: 4,
        question: "How fast is the conversion process?",
        answer: (
          <>
            The conversion process is quick and efficient, enabling you to
            transform your scanned files into editable PDFs in no time.{" "}
          </>
        ),
        accordion_id: "headingFour",
        collapsed: "collapsed",
        data_bs_target: "#collapseFour",
        aria_controls: "collapseFour",
        actice: "",
      },
      {
        id: 5,
        question: "How to Use Our Online Presentation Maker?",
        answer: (
          <>
            Steps to Create a Presentation with Online Presentation Maker:{" "}
            <br /> <li>Choose a Template.</li>{" "}
            <li>Enter the title of your presentation.</li>{" "}
            <li>Enter presenter name.</li>{" "}
            <li>Upload a doc file that contains the Data.</li>{" "}
            <li>Enter the text you want to add to the presentation.</li>{" "}
            <li>Enter the number of slides according to the requirement.</li>{" "}
          </>
        ),
        accordion_id: "headingFive",
        collapsed: "collapsed",
        data_bs_target: "#collapseFive",
        aria_controls: "collapseFive",
        actice: "",
      },
    ],
  },
];

// FREE TOOLS

export const image_to_pdf_content = {
  membur_about_title: "Explore our Image to PDF converter's standout qualities",
  about_info_1: (
    <>
      The “Image to PDF Converter” is the best free tool of ExpediChat, designed
      for everyone who needs to optimize processes in document turnover and
      increase efficiency. This tool makes the conversion of image files
      including JPEG, PNG, and more into PDF files a breeze.
    </>
  ),
  feature_list: [
    <>Convert multiple images to PDF quickly</>,
    <>Safe and Secure Online Transformation</>,
    <>Quick image-to-text processing in no time</>,
  ],
  about_info_2: (
    <>
      Moreover, it is also effective in retaining the high-quality images in the
      PDFs in the retention of details hence making it valuable in ensuring that
      all the PDFs received by or sent by the organization are free from any
      interference.
    </>
  ),
  about_info_3: (
    <>
      This tool is particularly applicable for diverse circumstances For
      workers, it entails combining numerous image files into a single PDF file,
      thus, getting rid of countless files to deal with. It can scale within
      merely a few seconds on this tool if one wants to convert it to PDF
      format. All you have to do is choose an image or images you desire in a
      single or multiple you can easily convert into a PDF format. This is free
      and very simple to convert from image to PDF file using the images to PDF
      tool.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "How can I convert multiple images into a single PDF file?",
      answer: (
        <>
          Yes, you can convert multiple image files into a single PDF document.
          This is the best free tool of ExpediChat i.e image to PDF converter,
          which allows you to select and upload multiple image files, which will
          be combined into a single PDF file.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question:
        "Is there a way to convert images to PDF while preserving their original quality?",
      answer: (
        <>
          Absolutely, yes you can convert an image to PDF without losing quality
          using Expedichat’s ‘Image to PDF free tool.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "How long does the process take to change an image into a PDF?",
      answer: (
        <>
          Expedichat’s free tools take very less time to convert an image to PDF
          file. If your image file is large and contains multiple files, it
          usually takes just a few seconds to complete the conversion and
          provide the desired PDF format output.
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_controls: "collapseThree",
      actice: "",
    },
  ],
};

export const pdf_to_jpg_content = {
  membur_about_title: "Explore our PDF to JPG converter's standout qualities.",
  about_info_1: (
    <>
      The PDF to JPG converter is something particularly useful for converting
      PDF files into high-quality images in the form of JPGs to make content
      more shareable and convenient. The effectiveness of this tool is marked by
      the speed and accuracy of the conversion process which is accompanied by
      the preservation of the quality of the images and quick accessibility of
      the necessary content by users.
    </>
  ),
  feature_list: [
    <>Easy and Fast PDF to JPG Conversion</>,
    <>Safe and Secure Online Transformation</>,
    <>Access and extract visual content from your PDF</>,
  ],
  about_info_2: (
    <>
      Also, businesses can use the converter to generate materials for promoting
      goods and services, reports, and presentations for clients by pulling out
      essential information and images out of PDFs.
    </>
  ),
  about_info_3: (
    <>
      Therefore, this tool is suitable for several situations. For example, it
      enables the graphic designer to take and use unique pages from the PDF
      format for issues such as presentations, social media, or advertisements.
      Lecturers and students can convert articles and PowerPoint slides into
      images, thus they can be used in the further creation of online
      educational materials or combined whiteboard lessons.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question:
        "Is it possible to maintain the original image quality while converting to JPG?",
      answer: (
        <>
          Yes, this Pdf to JPG converter allows you to maintain the original
          image quality while converting to JPG, ensuring that there is no loss
          in image clarity or resolution.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
  ],
};

export const word_count_content = {
  membur_about_title: "Explore our Word counter's standout qualities.",
  about_info_1: (
    <>
      The Word Counter Tool is beneficial for those who work with texts
      frequently, whether it is a writer, a student, or an artist. With the help
      of this free word counter tool one can easily count uncountable words.
    </>
  ),
  feature_list: [
    <>Highlights any words that are over the character limit</>,
    <>Safe and Secure Online word counter supported in every document</>,
    <>Access this tool from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, the Word Counter Tool enhances productivity by helping you
      stay within your text constraints and ensuring your message is delivered
      effectively.
    </>
  ),
  about_info_3: (
    <>
      This tool is particularly useful for various scenarios for students, the
      Word Counter Tool aids in managing essay and assignment lengths, ensuring
      that written work meets academic requirements without exceeding limits.
      This functionality is especially useful for adhering to guidelines for
      research papers, thesis submissions, and class assignments.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What do you mean by word counter tool?",
      answer: (
        <>
          A word counter tool, like the one offered by Expedichat, is designed
          to accurately count the number of words in any file or document.
          Whether you're dealing with text files, PDFs, or other formats, our
          free word counter tool efficiently tallies the words, helping you keep
          track of your content's length.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "What are the benefits of using this word counter tool?",
      answer: (
        <>
          This tool is beneficial for writers, students, and professionals who
          need precise word counts for their projects or documents. With
          Expedichat, you get a reliable and easy-to-use tool to streamline your
          word counting needs.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "Does this tool give accurate output?",
      answer: (
        <>
          Yes, our tool provides highly accurate word counts, ensuring you get
          precise results for any file or document you analyze.
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_controls: "collapseThree",
      actice: "",
    },
  ],
};

export const merge_pdf_content = {
  membur_about_title:
    "Explore our Image to PDF converter's standout qualities.",
  about_info_1: (
    <>
      The "Merge PDF Tool" is a versatile utility designed to streamline the
      process of combining multiple PDF files into a single document. It
      simplifies the management of extensive reports or project documents by
      consolidating them into one cohesive file, reducing the need to navigate
      through multiple documents.
    </>
  ),
  feature_list: [
    <>Smooth PDF Merging with Preview Feature</>,
    <>Rapidly merges PDFs with advanced processing efficiency</>,
    <>Access PDF Merger from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, the Merge PDF Tool is efficient for personal use, such as
      combining receipts, travel itineraries, or family photos, making it easier
      to manage and share information.
    </>
  ),
  about_info_3: (
    <>
      This tool proves invaluable in various scenarios, enhancing efficiency and
      organization. For professionals, In academic settings, students and
      researchers can merge lecture notes, research papers, and references,
      ensuring all their materials are easily accessible in one place.
      Businesses benefit from this tool by merging contracts, proposals, and
      presentations into a single document for a more streamlined workflow. By
      reducing the clutter and enhancing document organization, this tool
      ensures that users can handle their PDF files with greater ease and
      efficiency.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What process should you follow to join PDF files?",
      answer: (
        <>
          Here are the following step given below:
          <ul>
            <li>Select or drag and drop the PDF files on the dashboard.</li>
            <li>Preview the chosen PDF files.</li>
            <li>You can arrange PDF files as required.</li>
            <li>And then download the combined PDF file.</li>
          </ul>
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question:
        "Can I modify the arrangement of PDF files before finalizing the merge?",
      answer: (
        <>
          Yes, this tool provides the option to arrange the order of PDF files
          before merging. You can arrange these as per your desired sequence.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "Can I merge multiple PDF files at once?",
      answer: (
        <>
          Yes, you can merge multiple PDF files at once. This tool is designed
          to handle combining multiple PDFs, streamlining the process and saving
          you time.
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_controls: "collapseThree",
      actice: "",
    },
  ],
};

export const text_to_pdf_content = {
  membur_about_title:
    "Explore our Image to PDF converter's standout qualities.",
  about_info_1: (
    <>
      The "Text to PDF" tool offers a seamless solution for converting text
      documents into high-quality PDF files, catering to a variety of needs
      across different sectors.This tool simplifies the process of creating
      standardized, shareable documents such as reports, proposals, and
      contracts.
    </>
  ),
  feature_list: [
    <>Best tool for unlimited TXT to PDF conversions effortlessly</>,
    <>Rapidly merges PDFs with advanced processing efficiency</>,
    <>Access PDF Merger from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, the "Text to PDF" tool enhances efficiency by allowing batch
      conversions and integration with various applications, saving time and
      reducing manual effort.
    </>
  ),
  about_info_3: (
    <>
      This tool proves invaluable in various scenarios, For students and
      educators, the tool is invaluable for compiling lecture notes,
      assignments, and educational materials into a polished, easily
      distributable format. In the business realm, it facilitates the generation
      of professional-looking invoices, meeting agendas, and presentations,
      ensuring that all stakeholders receive well-organized and secure
      documents. Overall, it streamlines document handling, improves
      accessibility, and ensures that critical information is presented in a
      clean and professional manner.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What steps are needed to change a TXT file to a PDF?",
      answer: (
        <>
          Here are the following step given below:
          <ul>
            <li>Select or drag and drop the TXT files onto the converter.</li>
            <li>Preview the chosen TXT files.</li>
            <li>Include or exclude TXT files as needed.</li>
            <li>Finally, download the converted PDF file.</li>
          </ul>
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question:
        "Is it possible to convert multiple TXT files to PDF files at once?",
      answer: (
        <>
          Yes, you can absolutely convert multiple with the help of expedichat’s
          free tool” TXT files to PDF files” in a batch process.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question:
        "What is the purpose of converting a TXT document to a PDF file?",
      answer: (
        <>
          Converting a TXT document to a PDF file is useful for preserving the
          formatting and layout of a text document, making it suitable for
          sharing, printing, or presenting, while ensuring that the content
          remains consistent and accessible across various devices and
          platforms.
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_controls: "collapseThree",
      actice: "",
    },
    {
      id: 4,
      question:
        "Is there a difference between TXT and PDF in terms of document compatibility?",
      answer: (
        <>
          Yes, there is a difference in document compatibility. TXT files are
          plain text documents and are universally readable, while PDF files
          offer more advanced formatting and are suitable for documents that
          need to be shared or printed with a consistent layout and design.
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_controls: "collapseThree",
      actice: "",
    },
  ],
};

export const compress_pdf_content = {
  membur_about_title:
    "Explore our Image to PDF Compressor's standout qualities.",
  about_info_1: (
    <>
      The "Compress PDF Tool" is a special free tool offered by ExpediChat for
      anyone who frequently handles PDF documents. Its primary function is to
      reduce the file size of PDFs without compromising on quality, which can
      significantly enhance efficiency and productivity.
    </>
  ),
  feature_list: [
    <>Time-saving PDF compression with robust processing</>,
    <>Compress your PDFs online for free, as many times as needed</>,
    <>Access PDF Merger from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, businesses can streamline their document management
      processes by using the Compress PDF Tool to maintain organized and
      accessible digital files. The tool is designed with user-friendliness in
      mind, offering a straightforward interface that allows for quick and
      seamless compression, thus saving time and effort.
    </>
  ),
  about_info_3: (
    <>
      This tool proves invaluable in various scenarios. For professionals, this
      tool is a game changer as it ensures that large documents, such as reports
      or presentations, are easily shareable via email or cloud services,
      preventing issues with file size limits and slow upload times. Students
      and educators benefit from the tool by being able to compress academic
      papers and research documents, making them quicker to upload and easier to
      manage in online learning environments. Its efficiency in reducing file
      sizes while maintaining high quality ensures that users can handle large
      volumes of documents effortlessly, making it an essential tool for anyone
      looking to optimize their PDF management.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "How do you minimize PDF file size using online tools?",
      answer: (
        <>
          You can compress PDF file size in high quality using this PDF
          compressor tool. This convenient tool allows efficient file size
          compression while maintaining file quality.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "What is the process to compress PDF file size?",
      answer: (
        <>
          Here are the following steps that you need to follow:
          <ul>
            <li>
              Select or drag and drop the PDF file onto the upload section.
            </li>
            <li>Check the chosen PDF files again.</li>
            <li>Compress the PDF size accordingly.</li>
            <li>
              Then follow the final steps and Download your compressed PDF file.
            </li>
          </ul>
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "Can a PDF be compressed without any loss in quality?",
      answer: (
        <>
          Absolutely, yes you can compress PDF file size without losing quality
          using the best pdf compressor tool of ExpediChat. This allows you to
          compress PDF file size while maintaining the original quality of the
          PDF.
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_controls: "collapseThree",
      actice: "",
    },
  ],
};

export const docs_to_pdf_content = {
  membur_about_title: "Explore our Doc to PDF Converter standout qualities.",
  about_info_1: (
    <>
      A "Doc to PDF Converter" is an essential tool for anyone who frequently
      works with document formats and needs a reliable way to maintain their
      formatting and accessibility. This tool simplifies the process of
      converting Microsoft Word documents, Google Docs, or other text files into
      universally compatible PDF files.
    </>
  ),
  feature_list: [
    <>Ability to deliver high-quality conversions quickly</>,
    <>Convert your Docs to PDFs online for free, as many times as needed</>,
    <>Access Docs to PDF tool from any browser on any operating system.</>,
  ],
  about_info_2: (
    <>
      Additionally, The conversion process of the doc to pdf converter tool
      offered by ExpediChat is swift and straightforward, saving valuable time
      by eliminating manual reformatting.
    </>
  ),
  about_info_3: (
    <>
      This tool proves invaluable in various scenarios. Students and academics
      benefit from this tool by being able to convert their research papers,
      essays, and project reports into PDF format for easy submission and
      sharing. The consistent formatting provided by PDFs ensures that their
      work appears exactly as intended, preserving critical elements like
      images, tables, and font styles. Moreover, the PDF format is widely
      accepted by educational institutions, enhancing the tool’s utility in
      academic settings.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What are the methods for converting DOC documents to PDF?",
      answer: (
        <>
          Here are the following steps given below:
          <ul>
            <li>
              Use the file selection box to select the DOC files you want to
              convert to PDF format.
            </li>
            <li>
              Start the conversion of your DOC files by clicking the Convert
              button.
            </li>
            <li>
              Save the converted DOC files as PDF by using the download button.
            </li>
          </ul>
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "Is it secure to use Expedichats free Tools?",
      answer: (
        <>
          Yes ExpediChat takes the protection of files and data very seriously.
          We want our users to be able to trust us. Security aspects are
          therefore a permanent part of our work.
          <ul>
            <li>All file transfers are encrypted</li>
            <li>
              All files are automatically deleted from the processing server
              within a limited time.
            </li>
            <li>Compress the PDF size accordingly.</li>
            <li>
              We do not store files and do not evaluate them. Files will only be
              used for the intended purpose.
            </li>
          </ul>
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
  ],
};

export const pdf_splitter_content = {
  membur_about_title: " Explore our PDF Splitter standout qualities. ",
  about_info_1: (
    <>
      A PDF splitter is an invaluable tool for anyone dealing with extensive
      document management. For professionals, it simplifies the process of
      handling large files by allowing them to divide PDFs into smaller, more
      manageable sections.
    </>
  ),
  feature_list: [
    <>Easily split multiple pages from PDF at a time</>,
    <>Fast and efficient PDF page splitting with advanced processing</>,
    <>Access this tool from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, it aids in maintaining confidentiality by allowing users to
      share only selected portions of sensitive documents, thereby protecting
      privacy while facilitating collaboration.
    </>
  ),
  about_info_3: (
    <>
      This tool proves invaluable in various scenarios, For educators and
      students, a PDF splitter can segment study materials into focused,
      digestible parts, enhancing readability and organization. In the business
      world, the PDF splitter enhances workflow efficiency by enabling the
      extraction of specific pages or sections for targeted distribution or
      presentation. This tool is essential for scenarios like separating
      invoices, contracts, or project reports into individual files, which can
      then be easily distributed to relevant parties without the need to send
      large, unwieldy documents.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question:
        "How do you split a PDF into multiple files? What are the steps?",
      answer: (
        <>
          Here are the following steps given below:
          <ul>
            <li>Select or drag and drop the PDF file onto the splitter.</li>
            <li>Preview the chosen PDF pages.</li>
            <li>Split pages using a custom page range.</li>
            <li>Or, specify a fixed page range as needed.</li>
            <li>Download split pages as separate PDF files.</li>
          </ul>
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "How can I split a PDF document into selected page ranges?",
      answer: (
        <>
          Yes, Expedichat’s free pdf splitter provides the option to split a PDF
          into custom page ranges. You can define the specific pages you want to
          separate, allowing for flexibility in extracting the content you need.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "What benefits come from separating a PDF document into parts?",
      answer: (
        <>
          Splitting a PDF document can serve many purposes, such as extracting
          specific pages for sharing or storing, breaking up a larger document
          for easier management, or separating out different sections or
          chapters for different uses.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
  ],
};

export const barcode_scanner_content = {
  membur_about_title: " Explore our Barcode Scanner standout qualities",
  about_info_1: (
    <>
      A barcode scanner is a versatile tool with practical uses across various
      sectors, providing efficiency and convenience for everyone.This tool's
      ability to quickly capture and process data contributes to its efficiency,
      making it an indispensable asset in various industries.
    </>
  ),
  feature_list: [
    <>User-friendly interfaces and rapid scanning capabilities</>,
    <>Barcode scanners ensure accurate shipment tracking</>,
    <>Access this tool from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, in healthcare settings, they play a crucial role in patient
      management by accurately tracking medications and patient records, thereby
      reducing the risk of errors.
    </>
  ),
  about_info_3: (
    <>
      This efficiency is also evident in inventory management, where barcode
      scanners facilitate real-time tracking of stock levels, minimizing errors
      and helping businesses maintain optimal inventory. For logistics and
      warehousing, barcode scanners ensure accurate shipment tracking and
      streamline the sorting process, improving overall operational efficiency.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What is a barcode Scanner?",
      answer: (
        <>
          A barcode visually represents data through varying lines and spaces.
          Previously, decoding them needed specialized equipment, but now you
          can effortlessly scan barcodes with the help of ExpediChat’s free
          tool.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "How does the Barcode Ccanner work?",
      answer: (
        <>
          A barcode scanner is a tool that scans barcodes, which are graphical
          representations of data or information that can be easily scanned by
          this free tool.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question:
        "Is it safe to scan my barcode using Expedichat’s barcode scanner?",
      answer: (
        <>
          Yes, the link to scan results will be available immediately and the
          link with all uploaded files are deleted in a limited time.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
  ],
};

export const base64_to_pdf_content = {
  membur_about_title:
    " Explore our Base64 to PDF Converter standout qualities.",
  about_info_1: (
    <>
      The "Base64 to PDF" tool offers a practical solution for converting
      Base64-encoded data into easily accessible PDF documents. This tool is
      incredibly useful for various users, including developers, data analysts,
      and businesses dealing with large amounts of encoded data.
    </>
  ),
  feature_list: [
    <>Streamlines workflows and supports effective data handling</>,
    <>Beneficial for digital storage, and document management</>,
    <>Access this tool from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, its design ensures a seamless user experience, allowing
      users to quickly upload Base64-encoded strings and receive high-quality
      PDFs with minimal effort
    </>
  ),
  about_info_3: (
    <>
      This efficiency not only saves time but also enhances productivity by
      eliminating the need for complex decoding processes. Whether for managing
      reports, sharing documents, or handling encoded data, the "Base64 to PDF"
      tool streamlines workflows and supports effective data handling in diverse
      professional settings.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What is a Base64 to PDF converter?",
      answer: (
        <>
          A Base64 to PDF converter is a tool that transforms Base64-encoded
          data into a PDF file. Base64 encoding is a method of converting binary
          data into text format, often used to embed files into other documents
          or transmit them over text-based protocols. With Expedichat’s Base64
          to PDF converter, you can easily decode and convert this encoded data
          into a fully functional PDF document.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "How does Expedichat’s Base64 to PDF converter work?",
      answer: (
        <>
          ExpediChat’s Base64 to PDF converter decodes Base64-encoded data and
          converts it into a PDF file in just a few simple steps. You upload or
          paste your Base64 data into the tool, and it processes the information
          to generate a PDF document. The result is a high-quality PDF that
          preserves the integrity of your original data.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "Why would I need to use a Base64 to PDF converter?",
      answer: (
        <>
          You might need to use a Base64 to PDF converter if you have data
          encoded in Base64 that you need to convert into a PDF format. This
          tool is useful for integrating encoded content into applications,
          handling data from APIs, or working with embedded documents.
          ExpediChat’s converter simplifies this process, making it quick and
          efficient.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
  ],
};

export const pdf_to_base64_content = {
  membur_about_title: "Explore our PDF to Base64 Converter standout qualities",
  about_info_1: (
    <>
      The "PDF to Base64" tool is a versatile solution for efficiently
      converting PDF files into Base64 encoded strings.This tool streamlines the
      integration of PDF content into various digital platforms and
      applications, enhancing workflow efficiency and ease of data management.
    </>
  ),
  feature_list: [
    <>Ability to convert PDFs into a compact, text-based format</>,
    <>Improves document handling and data security</>,
    <>Access this tool from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, This tool streamlines the integration of PDF content into
      various digital platforms and applications, enhancing workflow efficiency
      and ease of data management.
    </>
  ),
  about_info_3: (
    <>
      Content managers and digital marketers can use this tool to streamline
      content integration and improve user experience. By converting PDF
      documents into Base64 strings, they can embed interactive and visually
      appealing documents directly into web content or mobile apps, enhancing
      engagement and accessibility for end-users.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What is a PDF to Base64 converter?",
      answer: (
        <>
          A PDF to Base64 converter transforms a PDF file into a Base64-encoded
          string. This process encodes the binary data of the PDF into a text
          format, making it easier to embed the PDF within web pages, emails, or
          other text-based formats.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "Why would I need to convert a PDF to Base64?",
      answer: (
        <>
          Converting a PDF to Base64 is useful for embedding the PDF directly
          into HTML or other text-based formats without needing an external file
          link. This is particularly helpful for ensuring that the PDF displays
          correctly across different platforms and applications
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "How does ExpediChat’s PDF to Base64 converter work?",
      answer: (
        <>
          ExpediChat’s free tool PDF to Base64 converter allows you to easily
          upload your PDF file, and it will automatically convert it into a
          Base64-encoded string. This string can then be used to embed the PDF
          in web pages or other digital documents seamlessly.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
  ],
};

export const zip_extractor_content = {
  membur_about_title: " Explore our ZIP Extractor standout qualities.",
  about_info_1: (
    <>
      A zip extractor is an essential tool for anyone dealing with compressed
      files, offering significant benefits in various practical scenarios. It is
      designed with user-friendly interfaces that make the extraction process
      straightforward, even for those with limited technical knowledge.
    </>
  ),
  feature_list: [
    <>Allowing users to handle multiple files simultaneously</>,
    <>Essential for students and researchers managing large datasets</>,
    <>Access this tool from any browser on any operating system</>,
  ],
  about_info_2: (
    <>
      Additionally, a Zip Extractor is a versatile and indispensable tool that
      simplifies file management, boosts productivity, and ensures seamless
      access to compressed content.
    </>
  ),
  about_info_3: (
    <>
      This tool proves invaluable in various scenarios for professionals, a zip
      extractor streamlines the process of managing large volumes of data by
      quickly decompressing files and folders. This efficiency is invaluable in
      work environments where time is of the essence, such as in data analysis,
      project management, and software development. The tool is also highly
      beneficial for students and researchers who frequently download and share
      large datasets or academic resources.
    </>
  ),
  faqs_data: [
    {
      id: 1,
      question: "What is a Zip Extractor?",
      answer: (
        <>
          A Zip Extractor is a tool of ExpediChat used to decompress or extract
          files from a zip archive. Zip files are compressed to save space and
          can contain multiple files and folders. A Zip Extractor decompresses
          these files so they can be accessed and used individually.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 2,
      question: "How does a Zip Extractor work?",
      answer: (
        <>
          A Zip Extractor works by decoding the compressed data within a zip
          file and then recreating the original files and folders in their
          uncompressed form. The extractor reads the zip archive, decompresses
          its contents, and saves them to a designated location on your device.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 3,
      question: "Can a Zip Extractor handle other types of compressed files?",
      answer: (
        <>
          ExpediChat’s free tool zip extractors are versatile and can handle
          other types of compressed files, such as .rar, .tar, or .7z files.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
  ],
};
