"use client"
import React, { useState } from 'react'
import TabSlider from '../components/TabSlider'
import CodeSlider from '../components/CodeSlider';
import UtilityBar from '../components/UtilityBar';
import EmptyWorkspace from '../components/EmptyWorkspace';
import WorkspaceRepos from '../components/WorkspaceRepos';

const page = () => {

    const [tab, setTab] = useState("documents");
    const [codeTab, setCodeTab] = useState("repos");

  return (
    <div className='overflow-y-auto flex gap-7 pb-24 scroll h-full'>
        <div className='w-full h-full'>
            <div className='w-full gap-4 flex flex-col'>
                <TabSlider setTab={setTab} tab={tab} />
                <CodeSlider setTab={setCodeTab} tab={codeTab} />
                <UtilityBar />
            </div>
            <div className='w-full h-full'>
                <WorkspaceRepos />
            </div>
        </div>
        <div className='w-[28%] h-screen'>
        </div>
    </div>
  )
}

export default page