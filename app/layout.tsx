import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const sans = Geist({variable:"--sans",subsets:["latin"]});
const mono = Geist_Mono({variable:"--mono",subsets:["latin"]});
export const metadata: Metadata={title:"BriefCraft｜地域型サイト設計エンジン",description:"市区町村とJAN・ISBN・車種・品番、案件から、独自情報と収益導線を備えたサイト設計を作成します。"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>}
