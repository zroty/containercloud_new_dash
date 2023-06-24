import * as React from 'react';
import classNames from 'classnames';

interface ChartBlockProps {
    title: string;
    legend?: React.ReactNode;
    children: React.ReactNode;
}

export default ({ title, legend, children }: ChartBlockProps) => (
    <div className={" bg-[#1B2130] w-[250px] md:w-[475px] shadow-lg pt-2 border-b-4 border-slate-700 rounded-2xl"}>
        <div className={'flex items-center justify-between px-4 py-2'}>
            <h3 className={'font-header transition-colors duration-100 group-hover:text-slate-50'}>{title}</h3>
            {legend && <p className={'flex items-center text-sm'}>{legend}</p>}
        </div>
        <div className={'z-10 ml-2'}>{children}</div>
    </div>
);