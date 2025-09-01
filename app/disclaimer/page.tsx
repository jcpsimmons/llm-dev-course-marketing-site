import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course
        </Link>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Legal Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Personal Content Disclaimer</h2>
                <p>
                  This course, website, and all associated content represent my personal views, opinions, and experiences. 
                  The materials presented here are created and offered in my individual capacity and do not represent, 
                  reflect, or constitute an endorsement by any current or former employer, client, or business partner.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Employment Independence</h2>
                <p>
                  Any current or former employment relationships I may have or have had do not influence, sponsor, 
                  endorse, or take responsibility for the content, opinions, methodologies, or recommendations 
                  presented in this course. This educational material is developed independently using my own time, 
                  resources, and expertise.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">No Confidential Information</h2>
                <p>
                  This course does not contain, reference, or utilize any proprietary, confidential, or trade secret 
                  information from any current or former employer, client, or business relationship. All content is 
                  based on publicly available information, general industry knowledge, and my personal experience 
                  with publicly accessible tools and methodologies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Educational Purpose Only</h2>
                <p>
                  This course is provided for educational and informational purposes only. It is not intended as 
                  professional advice for any specific business, technical, or legal situation. Students should 
                  consult with appropriate professionals and their own employers regarding the application of 
                  these techniques in their specific work environments.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Tool and Technology Independence</h2>
                <p>
                  References to specific AI tools, platforms, or technologies are made for educational purposes 
                  and do not constitute endorsements by any third party. The course focuses on general principles 
                  and methodologies that can be applied across various tools and platforms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, I disclaim all liability for any direct, indirect, 
                  incidental, consequential, or special damages arising from the use of this course material, 
                  including but not limited to any employment-related consequences, business decisions, or 
                  professional relationships that may be affected by the application of the course content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
                <p>
                  All course content is my original work or properly attributed to public sources. Any resemblance 
                  to proprietary methodologies or approaches of current or former employers is purely coincidental 
                  and based on common industry practices and publicly available information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Updates and Changes</h2>
                <p>
                  This disclaimer may be updated from time to time to reflect changes in circumstances or legal 
                  requirements. The most current version will always be available on this page.
                </p>
              </section>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}