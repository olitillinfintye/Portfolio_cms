import React from 'react'
import SectionHeader from '../SectionHeader'
import SubscribeForm from '@client/components/Forms/SubscribeForm'

export default function Subscribe() {
  return (
    <section className="w-full mb-6 pb-6 md:mb-16 md:pb-16">
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 px-4">
      <SectionHeader
        title="Let’s stay in touch"
        summary="Receive Updates Blog and Article & Much more !"
      />
      <div className="flex justify-center items-center">
        <SubscribeForm />
      </div>
      <div className="flex justify-center items-center">
        <div className="text-sm">By Subscribing. You agree with Term</div>
      </div>
    </div>
  </section>
  )
}
