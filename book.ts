interface BookItem {
  title: string;
  author: string;
  image: string;
  description: string;
  order: number;
  amazon: string;
  mybook: string;
}

const sortByOrder = (a: BookItem, b: BookItem) =>
  a.order < b.order ? -1 : a.order > b.order ? 1 : 0;

export const books: BookItem[] = [
  {
    title: "Data Engineering with AWS",
    author: "Gareth Eagar",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/data_engineering_with_aws.jpg",
    description:
      "This is a great book for understanding and implementing the lake house architecture to integrate your Data Lake with your warehouse. It shows you all the steps you need to orchestrate your data pipeline. From architecture, ingestion, and processing to running queries in your data warehouse, I really like the very hands-on approach that shows you how you can immediately implement the topics in your AWS account Andreas Kretz, CEO, Learn Data Engineering",
    order: 31,
    amazon:
      "https://www.amazon.com/Data-Engineering-AWS-Gareth-Eagar/dp/1800560419/ref=sr_1_1?crid=28BFB3NXGTM9G&keywords=data+engineering+with+aws&qid=1682772617&sprefix=data+engineering+with+aws%2Caps%2C485&sr=8-1",
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/data_engineering_with_aws.pdf",
  },
  {
    title: "Data Science on AWS",
    author: "Chris Fregly",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/data_science_on_aws.jpg",
    description:
      "With this practical book, AI and machine learning practitioners will learn how to successfully build and deploy data science projects on Amazon Web Services. The Amazon AI and machine learning stack unifies data science, data engineering, and application development to help level up your skills. This guide shows you how to build and run pipelines in the cloud, then integrate the results into applications in minutes instead of days. Throughout the book, authors Chris Fregly and Antje Barth demonstrate how to reduce cost and improve performance.",
    order: 32,
    amazon:
      "https://www.amazon.com/Data-Science-AWS-End-End/dp/1492079391/ref=sr_1_1?crid=17XK1VLHDZH59&keywords=data+science+on+aws&qid=1682772629&sprefix=data+science+on+%2Caps%2C327&sr=8-1",
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/data_science_on_aws.pdf",
  },
  {
    title: "Serverless Analytics with Amazon Athena",
    author: "Anthony Virtuoso",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/serverless_athena.jpg",
    description:
      "This book begins with an overview of the serverless analytics experience offered by Athena and teaches you how to build and tune an S3 Data Lake using Athena, including how to structure your tables using open-source file formats like Parquet. You willl learn how to build, secure, and connect to a data lake with Athena and Lake Formation. Next, you will cover key tasks such as ad hoc data analysis, working with ETL pipelines, monitoring and alerting KPI breaches using CloudWatch Metrics, running customizable connectors with AWS Lambda, and more. Moving on, you will work through easy integrations, troubleshooting and tuning common Athena issues, and the most common reasons for query failure.You will also review tips to help diagnose and correct failing queries in your pursuit of operational excellence.Finally, you will explore advanced concepts such as Athena Query Federation and Athena ML to generate powerful insights without needing to touch a single server.",
    order: 3,
    amazon:
      "https://www.amazon.com/Serverless-Analytics-Amazon-Athena-semi-structured/dp/1800562349/ref=sr_1_1?crid=2KSTZBI4HUBZS&keywords=serverless+athena&qid=1682772648&sprefix=serverless+athe%2Caps%2C323&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/athena.pdf",
  },

  {
    title: "Serverless ETL and Analytics with AWS Glue",
    author: "Vishal Pathak",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/serverless_glue.jpg",
    description:
      "Beginning with AWS Glue basics, this book teaches you how to perform various aspects of data analysis such as ad hoc queries, data visualization, and real time analysis using this service. It also provides a walk-through of CI/CD for AWS Glue and how to shift left on quality using automated regression tests. You will find out how data security aspects such as access control, encryption, auditing, and networking are implemented, as well as getting to grips with useful techniques such as picking the right file format, compression, partitioning, and bucketing.As you advance, you will discover AWS Glue features such as crawlers, Lake Formation, governed tables, lineage, DataBrew, Glue Studio, and custom connectors. The concluding chapters help you to understand various performance tuning, troubleshooting, and monitoring options.",
    order: 4,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/amazon_glue.pdf",
    amazon:
      "https://www.amazon.com/Serverless-ETL-Analytics-Glue-comprehensive/dp/1800564988/ref=sr_1_1?crid=HJXN5QBY7F2P&keywords=serverless+ETL+with+glue+aws&qid=1682772669&sprefix=serverless+etl+with+glue+a%2Caps%2C324&sr=8-1",
  },
  {
    title: "Simplify Big Data Analytics with Amazon EMR",
    author: "Sakti Mishra",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/amazon_emr.jpg",
    description:
      "Amazon EMR, formerly Amazon Elastic MapReduce, provides a managed Hadoop cluster in Amazon Web Services (AWS) that you can use to implement batch or streaming data pipelines. By gaining expertise in Amazon EMR, you can design and implement data analytics pipelines with persistent or transient EMR clusters in AWS.This book is a practical guide to Amazon EMR for building data pipelines. You will start by understanding the Amazon EMR architecture, cluster nodes, features, and deployment options, along with their pricing. Next, the book covers the various big data applications that EMR supports. You will then focus on the advanced configuration of EMR applications, hardware, networking, security, troubleshooting, logging, and the different SDKs and APIs it provides. Later chapters will show you how to implement common Amazon EMR use cases, including batch ETL with Spark, real time streaming with Spark Streaming, and handling UPSERT in S3 Data Lake with Apache Hudi. Finally, you will orchestrate your EMR jobs and strategize on premises Hadoop cluster migration to EMR. In addition to this, you will explore best practices and cost optimization techniques while implementing your data analytics pipeline in EMR",
    order: 5,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/amazon_emr.pdf",
    amazon:
      "https://www.amazon.com/Simplify-Big-Data-Analytics-Amazon/dp/1801071071/ref=sr_1_1?crid=1BHYUKJ14LKNU&keywords=%22Simplify+Big+Data+Analytics+with+Amazon+EMR&qid=1682772695&sprefix=simplify+big+data+analytics+with+amazon+emr%2Caps%2C322&sr=8-1",
  },
  {
    title: "Scalable Data Streaming with Amazon Kinesis",
    author: "Tarik Makota",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/amazon_kinesis.jpg",
    description:
      "Amazon Kinesis is a collection of secure, serverless, durable, and highly available purpose built data streaming services. This data streaming service provides APIs and client SDKs that enable you to produce and consume data at scale. Scalable Data Streaming with Amazon Kinesis begins with a quick overview of the core concepts of data streams, along with the essentials of the AWS Kinesis landscape. You will then explore the requirements of the use case shown through the book to help you get started and cover the key pain points encountered in the data stream life cycle. As you advance, you will get to grips with the architectural components of Kinesis, understand how they are configured to build data pipelines, and delve into the applications that connect to them for consumption and processing. You will also build a Kinesis data pipeline from scratch and learn how to implement and apply practical solutions. Moving on, you will learn how to configure Kinesis on a cloud platform. Finally, you will learn how other AWS services can be integrated into Kinesis. These services include Redshift, Dynamo Database, AWS S3, Elastic Search, and third-party applications such as Splunk.",
    order: 6,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/amazon_kinesis.pdf",
    amazon:
      "https://www.amazon.com/Scalable-Data-Streaming-Amazon-Kinesis/dp/1800565402/ref=sr_1_1?crid=1CC6W33MEW2GE&keywords=Scalable+Data+Streaming+with+Amazon+Kinesis&qid=1682772706&sprefix=scalable+data+streaming+with+amazon+kinesis%2Caps%2C312&sr=8-1",
  },
  {
    title: "Actionable Insights with Amazon QuickSight",
    author: "Manos Samatas",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/amazon_quicksight.jpg",
    description:
      "Amazon Quicksight is an exciting new visualization that rivals PowerBI and Tableau, bringing several exciting features to the table but sadly, there are not many resources out there that can help you learn the ropes. This book seeks to remedy that with the help of an AWS certified expert who will help you leverage its full capabilities. After learning QuickSight is fundamental concepts and how to configure data sources, you will be introduced to the main analysis-building functionality of QuickSight to develop visuals and dashboards, and explore how to develop and share interactive dashboards with parameters and on screen controls. You will dive into advanced filtering options with URL actions before learning how to set up alerts and scheduled reports.",
    order: 7,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/amazon_quicksight.pdf",
    amazon:
      "https://www.amazon.com/Actionable-Insights-Amazon-QuickSight-learning-driven/dp/1801079293/ref=sr_1_1?crid=1F6H7KDE97RHA&keywords=Actionable+Insights+with+Amazon+QuickSight&qid=1682772719&sprefix=actionable+insights+with+amazon+quicksight%2Caps%2C305&sr=8-1",
  },
  {
    title: "Amazon Redshift Cookbook",
    author: "Shruti Worlikar",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/redshift_cook_book.jpg",
    description:
      "Amazon Redshift is a fully managed, petabyte-scale AWS cloud data warehousing service. It enables you to build new data warehouse workloads on AWS and migrate on-premises traditional data warehousing platforms to Redshift. This book on Amazon Redshift starts by focusing on Redshift architecture, showing you how to perform database administration tasks on Redshift.You will then learn how to optimize your data warehouse to quickly execute complex analytic queries against very large datasets. Because of the massive amount of data involved in data warehousing, designing your database for analytical processing lets you take full advantage of Redshifts columnar architecture and managed services.As you advance, you will discover how to deploy fully automated and highly scalable extract, transform, and load (ETL) processes, which help minimize the operational efforts that you have to invest in managing regular ETL pipelines and ensure the timely and accurate refreshing of your data warehouse. Finally, you will gain a clear understanding of Redshift use cases, data ingestion, data management, security, and scaling so that you can build a scalable data warehouse platform.",
    order: 8,
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/amazon_redshift_cookbook.pdf",
    amazon:
      "https://www.amazon.com/Amazon-Redshift-Cookbook-warehousing-solutions/dp/1800569688/ref=sr_1_1?crid=2P8V7A8548HBG&keywords=Amazon+Redshift+Cookbook&qid=1682772732&sprefix=amazon+redshift+cookbook%2Caps%2C315&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc",
  },
  {
    title: "Automated Machine Learning on AWS",
    author: "Trento Potgiter",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/automated_ml_on_aws.jpg",
    description:
      "Automated Machine Learning on AWS begins with a quick overview of what the machine learning pipeline/process looks like and highlights the typical challenges that you may face when building a pipeline. Throughout the book, you'll become well versed with various AWS solutions such as Amazon SageMaker Autopilot, AutoGluon, and AWS Step Functions to automate an end-to-end ML process with the help of hands-on examples. The book will show you how to build, monitor, and execute a CI/CD pipeline for the ML process and how the various CI/CD services within AWS can be applied to a use case with the Cloud Development Kit (CDK). You'll understand what a data-centric ML process is by working with the Amazon Managed Services for Apache Airflow and then build a managed Airflow environment. You'll also cover the key success criteria for an MLSDLC implementation and the process of creating a self-mutating CI/CD pipeline using AWS CDK from the perspective of the platform engineering team",
    order: 9,
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/automated_machine_learning_aws.pdf",
    amazon:
      "https://www.amazon.com/Automated-Machine-Learning-AWS-production-ready/dp/1801811822/ref=sr_1_1?crid=30X8QQER05M37&keywords=Automated+Machine+Learning+on+AWS&qid=1682772744&sprefix=automated+machine+learning+on+aws%2Caps%2C327&sr=8-1",
  },
  {
    title: "Kubernetes Up and Running",
    author: "Joe Beda",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/kubernetes_up_running.jpg",
    description:
      "In just five years, Kubernetes has radically changed the way developers and ops personnel build, deploy, and maintain applications in the cloud. With this book is updated third edition, you will learn how this popular container orchestrator can help your company achieve new levels of velocity, agility, reliability, and efficiency whether you are new to distributed systems or have been deploying cloud native apps for some time.",
    order: 10,
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/kubernetes_up_and_running.pdf",
    amazon:
      "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_1?crid=2H4E57L24G3C5&keywords=Kubernetes+Up+and+Running&qid=1682772756&sprefix=kubernetes+up+and+running%2Caps%2C332&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc",
  },
  {
    title: "Getting Started with Containerization",
    author: "Gabriel N. Schenker",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/containerization.jpg",
    description:
      "Kubernetes is an open source orchestration platform for managing containers in a cluster environment. This Learning Path introduces you to the world of containerization, in addition to providing you with an overview of Docker fundamentals. As you progress, you will be able to understand how Kubernetes works with containers. Starting with creating Kubernetes clusters and running applications with proper authentication and authorization, you will learn how to create high- availability Kubernetes clusters on Amazon Web Services(AWS), and also learn how to use kubeconfig to manage different clusters.Whether it is learning about Docker containers and Docker Compose, or building a continuous delivery pipeline for your application, this Learning Path will equip you with all the right tools and techniques to get started with containerization.",
    order: 11,
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/getting_started_with_containerization.pdf",
    amazon:
      "https://www.amazon.com/Getting-Started-Containerization-operational-automating-ebook/dp/B07Q4952SH/ref=sr_1_1?crid=3PUMFFKQW7EG6&keywords=getting+started+with+containerization&qid=1682772768&sprefix=getting+started+with+containerizatio%2Caps%2C318&sr=8-1",
  },
  {
    title: "Production Kubernetes",
    author: "Josh Rosso",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/singapore.jpg",
    description:
      "Kubernetes has become the dominant container orchestrator, but many organizations that have recently adopted this system are still struggling to run actual production workloads. In this practical book, four software engineers from VMware bring their shared experiences running Kubernetes in production and provide insight on key challenges and best practices. The brilliance of Kubernetes is how configurable and extensible the system is, from pluggable runtimes to storage integrations. For platform engineers, software developers, infosec, network engineers, storage engineers, and others, this book examines how the path to success with Kubernetes involves a variety of technology, pattern, and abstraction considerations.",
    order: 12,
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/kubernetes_production.pdf",
    amazon:
      "https://www.amazon.com/Production-Kubernetes-Successful-Application-Platforms/dp/B0C2JG8HN4/ref=sr_1_1?crid=2VL6HBN63YSKR&keywords=Production+Kubernetes&qid=1682772779&sprefix=production+kubernetes%2Caps%2C320&sr=8-1",
  },
  {
    title: "Practical Vim",
    author: "Drew Neil",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/practical_vim.jpg",
    description:
      "Vim is a fast and efficient text editor that will make you a faster and more efficient developer. It's available on almost every OS, and if you master the techniques in this book, you will never need another text editor. In more than 120 Vim tips, you will quickly learn the editor's core functionality and tackle your trickiest editing and writing tasks. This beloved bestseller has been revised and updated to Vim 8 and includes three brand-new tips and five fully revised tips.",
    order: 13,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/vim_practical.pdf",
    amazon:
      "https://www.amazon.com/Practical-Vim-Edit-Speed-Thought/dp/1680501275/ref=sr_1_1?crid=37R58M1VK37ED&keywords=Practical+Vim&qid=1682772791&s=audible&sprefix=practical+vim%2Caudible%2C304&sr=1-1",
  },
  {
    title: "CSS In Depth",
    author: "Keith J.Grant",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/css_in_depth.jpeg",
    description:
      "CSS in Depth exposes you to a world of CSS techniques that range from clever to mind-blowing. This instantly useful book is packed with creative examples and powerful best practices that will sharpen your technical skills and inspire your sense of design.",
    order: 14,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/css_in_depth.pdf",
    amazon:
      "https://www.amazon.com/CSS-Depth-Keith-J-Grant/dp/1617293458/ref=sr_1_1?crid=SRUEMD3CZ94C&keywords=CSS+In+Depth&qid=1682772805&sprefix=css+in+depth%2Caps%2C326&sr=8-1",
  },
  {
    title: "Effective Typescript",
    author: "Dan Vanderkam",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/effective_typescript.jpg",
    description:
      "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript",
    order: 15,
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/effective_typescript.pdf",
    amazon:
      "https://www.amazon.com/Effective-TypeScript-Specific-Ways-Improve/dp/1492053740/ref=sr_1_1?crid=1BPGNPZ1QMNOI&keywords=%22Effective+Typescript&qid=1682772816&sprefix=effective+typescript%2Caps%2C318&sr=8-1",
  },
  {
    title: "Unix and Linux System Administration Handbook",
    author: "Evi Nemeth",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/unix_linux_admin.jpeg",
    description:
      "UNIX and Linux System Administration Handbook, Fifth Edition, is today definitive guide to installing, configuring, and maintaining any UNIX or Linux system, including systems that supply core Internet and cloud infrastructure. Updated for new distributions and cloud environments, this comprehensive guide covers best practices for every facet of system administration, including storage management, network design and administration, security, web hosting, automation, configuration management, performance analysis, virtualization, DNS, security, and the management of IT service organizations. The authors―world-class, hands-on technologists―offer indispensable new coverage of cloud platforms, the DevOps philosophy, continuous deployment, containerization, monitoring, and many other essential topics.Whatever your role in running systems and networks built on UNIX or Linux, this conversational, well-written ¿guide will improve your efficiency and help solve your knottiest problems.",
    order: 16,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/unix_admin.pdf",
    amazon:
      "https://www.amazon.com/UNIX-Linux-System-Administration-Handbook/dp/0134277554/ref=sr_1_1?crid=1HWI8UE6KJ6PT&keywords=Unix+and+Linux+System+Administration+Handbook&qid=1682772831&sprefix=unix+and+linux+system+administration+handbook%2Caps%2C320&sr=8-1",
  },
  {
    title: "Computer Organization and Design",
    author: "David A. Patterson",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/computer_organization.jpg",
    description:
      "Computer Organization and Design, Fifth Edition, is the latest update to the classic introduction to computer organization. The text now contains new examples and material highlighting the emergence of mobile computing and the cloud. It explores this generational change with updated content featuring tablet computers, cloud infrastructure, and the ARM (mobile computing devices) and x86 (cloud computing) architectures. The book uses a MIPS processor core to present the fundamentals of hardware technologies, assembly language, computer arithmetic, pipelining, memory hierarchies and I/Because an understanding of modern hardware is essential to achieving good performance and energy efficiency, this edition adds a new concrete example, Going Faster, used throughout the text to demonstrate extremely effective optimization techniques. There is also a new discussion of the Eight Great Ideas of computer architecture. Parallelism is examined in depth with examples and content highlighting parallel hardware and software topics. The book features the Intel Core i7, ARM Cortex A8 and NVIDIA Fermi GPU as real world examples, along with a full set of updated and improved exercises.",
    order: 17,
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/computer_organization.pdf",
    amazon:
      "https://www.amazon.com/Computer-Organization-Design-RISC-V-Architecture/dp/0128203315/ref=sr_1_1?crid=2SWQJ2EPAWKZT&keywords=Computer+Organization+and+Design&qid=1682772842&sprefix=computer+organization+and+design%2Caps%2C329&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc",
  },
  {
    title: "Database Systems The Complete Book",
    author: "Hector Garcia-Molina",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/database_system.jpg",
    description:
      "Database Systems: The Complete Book is ideal for Database Systems and Database Design and Application courses offered at the junior, senior and graduate levels in Computer Science departments. A basic understanding of algebraic expressions and laws, logic, basic data structure, OOP concepts, and programming environments is implied. Written by well-known computer scientists, this introduction to database systems offers a comprehensive approach, focusing on database design, database use, and implementation of database applications and database management systems.",
    order: 18,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/database_system.pdf",
    amazon:
      "https://www.amazon.com/Database-Systems-Complete-Book-2nd/dp/0131873253/ref=sr_1_1?crid=3E1GPJPYRNH9Z&keywords=Database+Systems+The+Complete+Book&qid=1682772851&sprefix=database+systems+the+complete+book%2Caps%2C336&sr=8-1&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0",
  },
  {
    title: "Real World Next.js",
    author: "Michele Riva",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/nextjs.jpg",
    description:
      "Next.js is a scalable and high-performance React.js framework for modern web development and provides a large set of features, such as hybrid rendering, route prefetching, automatic image optimization, and internationalization, out of the box. If you are looking to create a blog, an e-commerce website, or a simple website, this book will show you how you can use the multipurpose Next.js framework to create an impressive user experience",
    order: 19,
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/real-nextjs.pdf",
    amazon:
      "https://www.amazon.com/Real-World-Next-js-high-performance-applications-production/dp/180107349X",
  },
  {
    title: "Scalable Streaming Processing with Kinesis",
    author: "Danny Gagne",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/data_engineering_with_aws.jpg",
    description:
      "Scalable Data Streaming with Amazon Kinesis begins with a quick overview of the core concepts of data streams, along with the essentials of the AWS Kinesis landscape. You'll then explore the requirements of the use case shown through the book to help you get started and cover the key pain points encountered in the data stream life cycle. As you advance, you'll get to grips with the architectural components of Kinesis, understand how they are configured to build data pipelines, and delve into the applications that connect to them for consumption and processing. You'll also build a Kinesis data pipeline from scratch and learn how to implement and apply practical solutions. Moving on, you'll learn how to configure Kinesis on a cloud platform. Finally, you’ll learn how other AWS services can be integrated into Kinesis. These services include Redshift, Dynamo Database, AWS S3, Elastic Search, and third-party applications such as Splunk.",
    order: 20,
    amazon:
      "https://www.amazon.com/Data-Engineering-AWS-Gareth-Eagar/dp/1800560419/ref=sr_1_1?crid=28BFB3NXGTM9G&keywords=data+engineering+with+aws&qid=1682772617&sprefix=data+engineering+with+aws%2Caps%2C485&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/scalable_kinesis.pdf",
  },
  {
    title: "Kafka The Definitive Guide 2022",
    author: "Gwen Shapira",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/data_engineering_with_aws.jpg",
    description:
      "very enterprise application creates data, whether it consists of log messages, metrics, user activity, or outgoing messages. Moving all this data is just as important as the data itself. With this updated edition, application architects, developers, and production engineers new to the Kafka streaming platform will learn how to handle data in motion. Additional chapters cover Kafka's AdminClient API, transactions, new security features, and tooling changes.",
    order: 21,
    amazon:
      "https://www.amazon.com/Data-Engineering-AWS-Gareth-Eagar/dp/1800560419/ref=sr_1_1?crid=28BFB3NXGTM9G&keywords=data+engineering+with+aws&qid=1682772617&sprefix=data+engineering+with+aws%2Caps%2C485&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/kafka_guide_2022.pdf",
  },
  {
    title: "React Key Concepts",
    author: "Maximilian",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/react_key_concept.jpg",
    description:
      "As the most popular JavaScript library for building modern, interactive user interfaces, React is an in-demand framework that'll bring real value to your career or next project. But like any technology, learning React can be tricky, and finding the right teacher can make things a whole lot easier.",
    order: 22,
    amazon:
      "https://www.amazon.com/Data-Engineering-AWS-Gareth-Eagar/dp/1800560419/ref=sr_1_1?crid=28BFB3NXGTM9G&keywords=data+engineering+with+aws&qid=1682772617&sprefix=data+engineering+with+aws%2Caps%2C485&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/react_key_concepts.pdf",
  },
  {
    title: "Mastering EKS on AWS",
    author: "Malcoolm ORR",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/mastering_eks_on_aws.jpg",
    description:
      "Kubernetes has emerged as the de facto standard for container orchestration, with recent developments making it easy to deploy and handle a Kubernetes cluster. However, a few challenges such as networking, load balancing, monitoring, and security remain. To address these issues, Amazon EKS offers a managed Kubernetes service to improve the performance, scalability, reliability, and availability of AWS infrastructure and integrate with AWS networking and security services with ease. You'll begin by exploring the fundamentals of Docker, Kubernetes, Amazon EKS, and its architecture along with different ways to set up EKS. Next, you'll find out how to manage Amazon EKS, encompassing security, cluster authentication, networking, and cluster version upgrades. As you advance, you'll discover best practices and learn to deploy applications on Amazon EKS through different use cases, including pushing images to ECR and setting up storage and load balancing. With the help of several actionable practices and scenarios, you'll gain the know-how to resolve scaling and monitoring issues. Finally, you will overcome the challenges in EKS by developing the right skill set to troubleshoot common issues with the right logic.By the end of this Kubernetes book, you'll be able to effectively manage your own Kubernetes clusters and other components on AWS.",
    order: 23,
    amazon:
      "https://www.amazon.com/Mastering-Elastic-Kubernetes-Service-AWS/dp/1803231211/ref=sr_1_1?crid=SC5LHHCAW2N4&keywords=mastering+eks+on+aws&qid=1693796930&sprefix=mastering+eks+on+a%2Caps%2C331&sr=8-1&asin=1803231211&revisionId=&format=4&depth=1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/master_amazon_eks.pdf",
  },
  {
    title: "Transformers for NLP",
    author: "Denis Rothman",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/transformers_for_nlp.jpg",
    description:
      "Transformers for Natural Language Processing, 2nd Edition, guides you through the world of transformers, highlighting the strengths of different models and platforms, while teaching you the problem-solving skills you need to tackle model weaknesses. You'll use Hugging Face to pretrain a RoBERTa model from scratch, from building the dataset to defining the data collator to training the model. If you're looking to fine-tune a pretrained model, including GPT-3, then Transformers for Natural Language Processing, 2nd Edition, shows you how with step-by-step guides. The book investigates machine translations, speech-to-text, text-to-speech, question-answering, and many more NLP tasks. It provides techniques to solve hard language problems and may even help with fake news anxiety (read chapter 13 for more details). You'll see how cutting-edge platforms, such as OpenAI, have taken transformers beyond language into computer vision tasks and code creation using DALL-E 2, ChatGPT, and GPT-4.",
    order: 24,
    amazon:
      "https://www.amazon.com/Transformers-Natural-Language-Processing-architectures/dp/1803247339/ref=sr_1_1_sspa?crid=2GYDLA7MNHO8D&keywords=transformers+for+nlp&qid=1693796981&sprefix=transformers+for+nl%2Caps%2C335&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/nlp_transformers.pdf",
  },
  {
    title: "Prometheus Up and Running",
    author: "Brian Brazil",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/prometheus_up_running.jpg",
    description:
      "Get up to speed with Prometheus, the metrics-based monitoring system used in production by tens of thousands of organizations. This updated second edition provides site reliability engineers, Kubernetes administrators, and software developers with a hands-on introduction to the most important aspects of Prometheus, including dashboarding and alerting, direct code instrumentation, and metric collection from third-party systems with exporters.Prometheus server maintainer Julien Pivotto and core developer Brian Brazil demonstrate how you can use Prometheus for application and infrastructure monitoring. This book guides you through Prometheus setup, the Node Exporter, and the Alertmanager, and then shows you how to use these tools for application and infrastructure monitoring. You'll understand why this open source system has continued to gain popularity in recent years.",
    order: 25,
    amazon:
      "https://www.amazon.com/Prometheus-Up-Running-Julien-Pivotto-ebook/dp/B0C1MCLLVH/ref=sr_1_1?keywords=prometheus+up+and+running&qid=1693796865&sprefix=promethues+up+and+%2Caps%2C327&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/prometheus.pdf",
  },
  {
    title: "Enterprise Data Warehousing on AWS",
    author: "AWS",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/data_science_on_aws.jpg",
    description:
      "Data is an enterprise’s most valuable asset. To fuel innovation, which fuels growth, an enterprise must:Store every relevant data point about their business, Give data access to everyone who needs it, Have the ability to analyze the data in different ways, Distill the data down to insights. Most large enterprises have data warehouses for reporting and analytics purposes. They use data from a variety of sources, including their own transaction processing systems, and other databases. In the past, building and running a data warehouse—a central repository of information coming from one or more data sources—was complicated and expensive. Data warehousing systems were complex to set up, cost millions of dollars in upfront software and hardware expenses, and took months of planning, procurement, implementation, and deployment processes. After making the initial investments and setting up the data warehouse, enterprises had to hire a team of database administrators to keep their queries running fast and protect against data loss.",
    order: 26,
    amazon: "",
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/enterprise_data_warehousing_on_aws.pdf",
  },
  {
    title: "Learning React",
    author: "Alex Banks",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/learning_react.jpg",
    description:
      "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary. With their learning road map, authors Alex Banks and Eve Porcello show you how to create UIs that can deftly display changes without page reloads on large-scale, data-driven websites. You’ll also discover how to work with functional programming and the latest ECMAScript features. Once you learn how to build React components with this hands-on guide, you’ll understand just how useful React can be in your organization.",
    order: 27,
    amazon:
      "https://www.amazon.com/Learning-React-Modern-Patterns-Developing/dp/1492051721/ref=sr_1_1?crid=X5SO8DRDYUHW&keywords=learning+react&qid=1693796818&sprefix=learning+rea%2Caps%2C327&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/learning_react.pdf",
  },
  {
    title: "Amazon Sagemaker Best Pratice",
    author: "Sireesha Muppala",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/amazon_sagemaker_best_practice.jpg",
    description:
      "Amazon SageMaker is a fully managed AWS service that provides the ability to build, train, deploy, and monitor machine learning models. The book begins with a high-level overview of Amazon SageMaker capabilities that map to the various phases of the machine learning process to help set the right foundation. You'll learn efficient tactics to address data science challenges such as processing data at scale, data preparation, connecting to big data pipelines, identifying data bias, running A/B tests, and model explainability using Amazon SageMaker. As you advance, you'll understand how you can tackle the challenge of training at scale, including how to use large data sets while saving costs, monitoring training resources to identify bottlenecks, speeding up long training jobs, and tracking multiple models trained for a common goal. Moving ahead, you'll find out how you can integrate Amazon SageMaker with other AWS to build reliable, cost-optimized, and automated machine learning applications. In addition to this, you'll build ML pipelines integrated with MLOps principles and apply best practices to build secure and performant solutions.",
    order: 28,
    amazon:
      "https://www.amazon.com/Amazon-SageMaker-Best-Practices-successful/dp/1801070520/ref=sr_1_1_sspa?crid=2L3SB76X209WB&keywords=amazon+sagemaker+best+practice&qid=1693796732&sprefix=amazon+sagemaker+best+practi%2Caps%2C348&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/amazon_sagemaker_best_practice.pdf",
  },
  {
    title: "The Kubernetes Book",
    author: "Nigel Poultn",
    image: "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/kubernetes_book.jpeg",
    description:
      "Containers transformed how we package and deploy applications, but they came with inherent challenges. Kubernetes is a platform for deploying and managing containerised applications at scale. It also abstracts underlying infrastructure, making it easier to deploy and manage applications across heterogenous clouds and on-premises environments. The Kubernetes Book offers a beginner-friendly approach to mastering Kubernetes architecture and core concepts such as Pods, Deployments, Services, StatefulSets, Ingress, ConfigMaps, and more. It also demystifies the Kubernetes API, teaches you how to secure Kubernetes, and brings you up to speed with important cloud-native concepts such as microservices, declarative configuration, desired state, reconciliation, and more.",
    order: 29,
    amazon:
      "https://www.amazon.com/Kubernetes-Book-Version-November-2018-ebook/dp/B072TS9ZQZ/ref=sr_1_1?crid=ZGVGYKFNXKKU&keywords=the+kubernetes+book&qid=1694266563&sprefix=th%2Caps%2C1836&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/the_kubernete_book.pdf",
  },
  {
    title: "Kubernetes DevOps",
    author: "Michael Levan",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/kubernetes_devops.jpg",
    description:
      "Kubernetes is a trending topic among engineers, CTOs, CIOs, and other technically sound professionals. Due to its proliferation and importance for all cloud technologies, DevOps engineers nowadays need a solid grasp of key Kubernetes concepts to help their organization thrive. This book equips you with all the requisite information about how Kubernetes works and how to use it for the best results. You'll learn everything from why cloud native is important to implementing Kubernetes clusters to deploying applications in production. This book takes you on a learning journey, starting from what cloud native is and how to get started with Kubernetes in the cloud, on-premises, and PaaS environments such as OpenShift. Next, you'll learn about deploying applications in many ways, including Deployment specs, Ingress Specs, and StatefulSet specs. Finally, you'll be comfortable working with Kubernetes monitoring, observability, and security. Each chapter of 50 Kubernetes Concepts Every DevOps Engineer Should Know is built upon the previous chapter, ensuring that you develop practical skills as you work through the code examples in GitHub, allowing you to follow along while giving you practical knowledge.",
    order: 30,
    amazon:
      "https://www.amazon.com/Kubernetes-Concepts-DevOps-Engineer-Should/dp/1804611476/ref=sr_1_1?crid=2CP2DDW8HTTUR&keywords=50+concepts+kubernetes&qid=1694266826&sprefix=50+concepts+kubern%2Caps%2C790&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/kubernetes_devops.pdf",
  },
  {
    title: "Delta Lake Up and Running",
    author: "Bennie Haelen",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/delta_lake_up_running.jpg",
    description:
      "With the rapid growth of big data and AI, organizations are quickly building data products and solutions in an ad-hoc manner. But as these data organizations mature, it's apparent that their analysis and machine learning models are only as reliable as the data they're built upon. The solution? Delta Lake, an open-source format that enables building a lakehouse architecture on top of existing storage systems such as S3, ADLS, and GCS. In this practical book, author Bennie Haelen shows data engineers, data scientists, and data analysts how to get Delta Lake and its unique features up and running. The ultimate goal of building data pipelines and applications is to query processed data and gain insights from it. You'll learn how the choice of storage solution determines the robustness and performance of the data pipeline, from raw data to insights. ",
    order: 2,
    amazon:
      "https://www.amazon.com/Delta-Lake-Running-Lakehouse-Architectures/dp/1098139720/ref=sr_1_1?crid=2E34BY9JA6HN2&keywords=delta+lake+up+and+running&qid=1694615786&sprefix=delta+lake+up+and+%2Caps%2C424&sr=8-1",
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/delta-lake-up-running.pdf",
  },
  {
    title: "Confluent Data Streaming Revolution Comic",
    author: "Bennie Haelen",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/confluent_data_streaming_comic_1.png",
    description:
      "A captivating comic that will ignite the imagination of developers and technical architects interested in Kafka and event-driven architectures Shoe retail titan NewLimits relies on a jumble of homegrown ETL pipelines and batch-based data systems. As a result, sluggish and inefficient data transfers are frustrating internal teams and holding back the company’s development velocity and data quality. NewLimits developer Ada and architect Jax are eager to put the days of daily batch jobs, frequent failures, and inconsistent data sources behind them. When their lead unexpectedly assigns them a new project focused on developing real-time data streaming capabilities, Ada and Jax must decide, will they listen to the cautionary advice of senior developer Pat or embrace the unknown with their intrepid guide Iris?",
    order: 1,
    amazon:
      "https://www.amazon.com/Delta-Lake-Running-Lakehouse-Architectures/dp/1098139720/ref=sr_1_1?crid=2E34BY9JA6HN2&keywords=delta+lake+up+and+running&qid=1694615786&sprefix=delta+lake+up+and+%2Caps%2C424&sr=8-1",
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/confluent_data_streaming_comic_1.pdf",
  },
  {
    title: "Hands-on Machine Learning",
    author: "Aurelien Geron",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-entest/hands-on-machine-learning.png",
    description:
      "Through a recent series of breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This bestselling book uses concrete examples, minimal theory, and production-ready Python frameworks (Scikit-Learn, Keras, and TensorFlow) to help you gain an intuitive understanding of the concepts and tools for building intelligent systems. With this updated third edition, author Aurélien Géron explores a range of techniques, starting with simple linear regression and progressing to deep neural networks. Numerous code examples and exercises throughout the book help you apply what you've learned. Programming experience is all you need to get started. Use Scikit-learn to track an example ML project end to end Explore several models, including support vector machines, decision trees, random forests, and ensemble methods Exploit unsupervised learning techniques such as dimensionality reduction, clustering, and anomaly detection Dive into neural net architectures, including convolutional nets, recurrent nets, generative adversarial networks, autoencoders, diffusion models, and transformers Use TensorFlow and Keras to build and train neural nets for computer vision, natural language processing, generative models, and deep reinforcement learning",
    order: 33,
    amazon:
      "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1098125975/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1695565354&sr=8-1",
    mybook: "https://d2cvlmmg8c0xrp.cloudfront.net/book/hands_on_ml.pdf",
  },
  {
    title: "Delta Lake Definitive Guide",
    author: "Denny Lee",
    image:
      "https://d2cvlmmg8c0xrp.cloudfront.net/web-entest/delta-lake-definitive-guide.png",
    description:
      "Delta Lake The Definitive Guide includes two chapters that will help you use and optimize Delta Lake, the open source storage format that enables you to create modern data lakehouse architectures. The first chapter describes Delta Lake maintenance fundamentals and explains best practices for optimizing and tuning Delta tables. The second chapter explores how to use Delta Lake for data streaming scenarios including change data capture. Download the preview to get practical guidance on creating and working with Delta tables",
    order: 34,
    amazon:
      "https://www.databricks.com/resources/ebook/delta-lake-the-definitive-guide-by-oreilly",
    mybook:
      "https://d2cvlmmg8c0xrp.cloudfront.net/book/delta_lake_definite_guide.epub",
  },
].sort(sortByOrder);
