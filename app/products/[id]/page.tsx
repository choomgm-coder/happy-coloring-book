import Link from "next/link";

export default async function ProductPage() {
return ( <main className="min-h-screen bg-white px-6 py-10"> <div className="mx-auto max-w-4xl"> <Link href="/products" className="text-green-700 underline">
← Back to Products </Link>


    <div className="mt-8 grid gap-8 md:grid-cols-2">
      <div>
        <img
          src="/products/animal-coloring-book/cover.jpg"
          alt="สมุดระบายสี"
          className="w-full rounded-3xl border border-green-100"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-green-800">
          สมุดระบายสี
        </h1>

        <p className="mt-4 text-gray-600">
          ไฟล์ PDF สำหรับพิมพ์ใช้งานได้ทันที เหมาะสำหรับเด็กและผู้ปกครอง
        </p>

        <div className="mt-8 rounded-3xl border border-green-100 p-6">
          <div className="flex items-center justify-between py-3 border-b border-green-100">
            <span className="font-semibold text-green-900">
              แพ็ก 20 เล่ม
            </span>
            <span className="text-2xl font-bold text-green-800">
              ฿159
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="font-semibold text-green-900">
              แพ็ก 50 เล่ม
            </span>
            <span className="text-2xl font-bold text-green-800">
              ฿199
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/products/animal-coloring-book/sample.pdf"
            target="_blank"
            className="rounded-full border border-green-300 px-5 py-3 text-center font-semibold text-green-700 hover:bg-green-50"
          >
            ดาวน์โหลด PDF ทดลอง
          </a>

          <a
            href="https://m.me/YOUR_PAGE"
            target="_blank"
            className="rounded-full bg-green-600 px-5 py-3 text-center font-semibold text-white hover:bg-green-700"
          >
            ซื้อผ่าน Messenger
          </a>
        </div>

        {/* PromptPay */}
        <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-800">
            ชำระเงินด้วย PromptPay
          </h2>

          <p className="mt-2 text-gray-600">
            สแกน QR เพื่อชำระเงินจำนวน 159 บาท
          </p>

          <img
            src="/payments/promptpay-159.png"
            alt="PromptPay QR"
            className="mt-4 w-64 rounded-2xl border border-green-100"
          />
        </div>
      </div>
    </div>
  </div>
</main>


);
}
