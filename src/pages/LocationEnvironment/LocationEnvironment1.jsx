import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
	{ img: section2Image1, titleText: "확정된 개발호재로<br />청주을 더 새롭게 살수록 높아지는 미래가치", contentText: "SK하이닉스 신규팸 계획 20조원 투자예정<br />최첨단 반도체 산업의 최중심<br />" },
	{ img: section2Image2, titleText: "도보5분으로<br />의세권을 누리릴 수 있는 프리미엄", contentText: "아주대 첨단의료AI복합타운<br />AI활용 첨단의료시설로<br /> 500병상 규모로 2030년 개원 예정" },
	{ img: section2Image3, titleText: "수도권 시내·외를 더 빠르게<br />광역으로 통하는 특급 교통", contentText: "단지 앞 청주2순환로, 중부고속도로 서청주IC, <br />KTX 오송역, 청주공항 등 <br /> 다양한 쾌속교통 루트가 경유 하는 교통요지" },
	{ img: section2Image4, titleText: "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />모두 갖춘 중심생활", contentText: "봉덕초, 송절중, 봉명고교 등 도보5분 학세권 형성<br />파비뇽 아울렛 등 편의시설 인접" },
	{ img: section2Image5, titleText: "압도적인 현대라는 1군브랜드 프리미엄 ", contentText: "현대건설 프리미엄" },
	{ img: section2Image6, titleText: "모든 인프라가 모여있는 중심상업지구<br />도보 3분권내 초근접", contentText: " 단지 내 YBM 영어교육환경 및 조식,중식서비스제공 <br />현대건설 프리미엄에 품격있는 삶을 살 수 있는 기회" },
]

const LocationEnvironment1 = () => {
	const menuContents = [
		// { title: "입지 안내영상", url: "/FloorPlan/videos" },
		{ title: "입지안내", url: "/LocationEnvironment/intro" }, 
		{ title: "프리미엄", url: "/LocationEnvironment/primium" },
					];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	// 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
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
		<title>현대 테크노 레이원시티 - 입지환경</title>
		<meta
		  name="description"
		  content="현대 테크노 레이원시티의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 청주의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
											"
		/>
		<meta
		  name="keywords"
		  content="현대 테크노 레이원시티, 청주 레이원시티"
		/>
		<link rel="canonical" href="https://eliasart.kr/LocationEnvironment/intro" />

		{/* Open Graph - 소셜 미디어 공유 최적화 */}
		<meta
		  property="og:title"
		  content="현대 테크노 레이원시티 - 입지환경"
		/>
		<meta
		  property="og:description"
		  content="현대 테크노 레이원시티의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 청주의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
											"
		/>
		<meta
		  property="og:image"
		  content="https://eliasart.kr/Main1.png"
		/>
		<meta property="og:url" content="https://eliasart.kr/LocationEnvironment/intro" />
		<meta property="og:site_name" content="현대 테크노 레이원시티" />

		{/* Twitter 카드 설정 */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta
		  name="twitter:title"
		  content="현대 테크노 레이원시티 - 입지환경"
		/>
		<meta
		  name="twitter:description"
		  content="현대 테크노 레이원시티의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 청주의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
											"
		/>
		<meta
		  name="twitter:image"
		  content="https://eliasart.kr/Main1.png"
		/>
		<meta name="twitter:url" content="https://eliasart.kr/LocationEnvironment/intro" />

		{/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
		<script type="application/ld+json">
		  {`
								{
									"@context": "https://schema.org",
									"@type": "WebPage",
									"name": "현대 테크노 레이원시티 - 입지환경",
									"description": "현대 테크노 레이원시티의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 청주의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
											
									",
									"url": "https://eliasart.kr/LocationEnvironment/intro"
								}
								`}
		</script>
	  </Helmet>	

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
			<h1 className={styles.screenReaderOnly}>현대 테크노 레이원시티 - 입지안내</h1>
			<p className={styles.screenReaderOnly}>현대 테크노 레이원시티의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 청주의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
			</p>

			<div className={styles.textBox}>
				<div>갈수록 완벽해질 청주</div>
				<div>살수록 높아질 현대</div>
				<div>도시를 압도할 자부심 현대 테크노 레이원시티</div>
			</div>

			<img src={page1} className={styles.image2} alt="현대 테크노 레이원시티입지환경-image1" />

			<div className={styles.section2}>
				{LocationSection.map((value, idx) => (
					<LocationSectionBox
						image={value.img}
						title={value.titleText}
						text={value.contentText}
					/>
				))}
			</div>

			{/* <div className={styles.commonBox}>
				<div className={styles.notice}>
					※청주 브레인시티 개발계획 관련내용은 '경기도 고시 제2022-283호' 및 '청주도시공사 브레인시티 토지 이용 계획'을 참고하였습니다
				</div>
				<div className={styles.notice}>
					※아주대학교 청주병원 및 카이스트 청주캠퍼스 관련 내용은 '청주시청' 2024년 주요업무계획을 참고하였습니다
				</div>
				<div className={styles.notice}>
					※청주동부고속화도로 관련 내용은 '청주시 고지 제 2023-407호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※KTX 수원발 관련 내용은 '국토교통부 고시 제'2023-598호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※GTX A·C 관련 내용은 '국토굥통부 2024년 1월 25일 보도자료 별첨 교통분야 3대 혁신 전략'을 참고하였습니다
				</div>
				<div className={styles.notice}>
					※신설도로  관련내용은 '경기도 청주시 고시 제2023-316호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※본 홍보물의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 차이가 날 수 있습니다
				</div>
				<div className={styles.notice}>
					※치도 등 상기 개발 및 료통 배정 등의 계획에 대한 사항은 추후 관계 기관의 사정에 따라 변경 및 취소될 수 있으며 이는 당사와 무관함을 알려드립니다

				</div>
				<div className={styles.notice}>
					※상기 이미지와 내용의 각종 시설(학교,도로망 등)은 지구단위계획의 변경, 허가관청 및 국가시책에 따라 변경될 수 있습니다.
				</div>
	
			</div> */}

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;
