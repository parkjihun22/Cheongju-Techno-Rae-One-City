import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";

const projectData = [
  { label: "사업명", value: "현대 테크노 레이원시티" },
  { label: "사업위치", value: "청주시 흥덕구 송절1지구 도시개발사업 [현대테크노 레이원시티]" },
  { label: "대지면적", value: "106,050.4985㎡" },
  { label: "건축면적", value: "13,404.3638㎡" },
  { label: "연면적", value: "376,069.7623㎡" },
  { label: "용적률", value: "229.55%" },
  { label: "건축규모", value: "아파트 지하 최저 2층 ~ 지상 최고 35층 16개동" },
  { label: "세대수",value: "총 1,817세대 / 59㎡,74㎡,84㎡A,84㎡A-1,84㎡B",},
];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    // { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "선착순계약 서류안내", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" }); // 모바일 여부 확인
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>현대 테크노 레이원시티 - 사업안내</title>
        <meta
          name="description"
          content="현대 테크노 레이원시티의 사업 개요 및 개발 계획을 확인하세요. 혁신적인 단지 설계, 편리한 인프라, 입주자 맞춤형 편의시설을 통해 최적의 주거 환경을 제공합니다.
"
        />
        <meta
          name="keywords"
          content="현대 테크노 레이원시티, 청주 레이원시티"
        />
        <link rel="canonical" href="https://eliasart.kr/BusinessGuide/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="현대 테크노 레이원시티 - 사업안내" />
        <meta
          property="og:description"
          content="현대 테크노 레이원시티의 사업 개요 및 개발 계획을 확인하세요. 혁신적인 단지 설계, 편리한 인프라, 입주자 맞춤형 편의시설을 통해 최적의 주거 환경을 제공합니다.
"
        />
        <meta
          property="og:image"
          content="https://eliasart.kr/Main1.png"
        />
        <meta property="og:url" content="https://eliasart.kr/BusinessGuide/intro" />
        <meta property="og:site_name" content="현대 테크노 레이원시티" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="현대 테크노 레이원시티 - 사업안내" />
        <meta
          name="twitter:description"
          content="현대 테크노 레이원시티의 사업 개요 및 개발 계획을 확인하세요. 혁신적인 단지 설계, 편리한 인프라, 입주자 맞춤형 편의시설을 통해 최적의 주거 환경을 제공합니다.
"
        />
        <meta
          name="twitter:image"
          content="https://eliasart.kr/Main1.png"
        />
        <meta name="twitter:url" content="https://eliasart.kr/BusinessGuide/intro" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
			{
				"@context": "https://schema.org",
				"@type": "WebPage",
				"name": "현대 테크노 레이원시티 - 사업안내",
				"description": "현대 테크노 레이원시티의 사업 개요 및 개발 계획을 확인하세요. 혁신적인 단지 설계, 편리한 인프라, 입주자 맞춤형 편의시설을 통해 최적의 주거 환경을 제공합니다.

					",
				"url": "https://eliasart.kr/BusinessGuide/intro"
			}
			`}
        </script>
      </Helmet>

      <header>
        <Header isChanged={isScroll} />
      </header>
      <FixIcon />
      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />

      <nav className={styles.screenReaderOnly}>
        <h2>현대 테크노 레이원시티 사업안내</h2>
        <ul>
          {menuContents.map((menu, index) => (
            <li key={index}>
              <Link to={menu.url}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <section className={styles.screenReaderOnly}>
        <h1>현대 테크노 레이원시티 - 사업안내</h1>
        <p>
          현대 테크노 레이원시티의 사업 개요 및 개발 계획을 확인하세요. 혁신적인
          단지 설계, 편리한 인프라, 입주자 맞춤형 편의시설을 통해 최적의 주거
          환경을 제공합니다.
        </p>
      </section>

      <section
        className={`${styles.textBox} ${
          isTextVisible ? styles.active : "textBox"
        } `}
      >
        <div>생활의 모든 것을 한걸음에</div>
        <div>현대건설, 청주의 중심에 서다</div>
      </section>

      <img
        className={styles.img3}
        src={page1}
        alt="현대 테크노 레이원시티조감도-image1"
      />

      <div className={styles.tableContainer}>
        {!isMobile && <img className={styles.tableImg} src={tableImage} />}
        <table className={styles.projectTable}>
          <tbody>
            {projectData.map((item, index) => (
              <tr key={index}>
                <td className={styles.label}>{item.label}</td>
                <td className={styles.contents}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 본 이미지는 소비자의 이해를  돕기 위해 사용되었으며, 세대 구성 등에 대한 최종 결정은 사업승인 이후에 확정됩니다.
        </div>
      
      </div>

      <Footer />
    </div>
  );
};

export default BusinessGuide1;
