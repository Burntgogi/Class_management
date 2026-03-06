import React from 'react';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardCardItem } from '../types';

interface Props {
  item: DashboardCardItem;
}

const accentClasses: Record<DashboardCardItem['accent'], string> = {
  blue: 'bg-[#edf5fb] text-[#2d6f91] ring-[#d7e7f3]',
  green: 'bg-[#edf7f2] text-[#2f7d81] ring-[#dceee7]',
  amber: 'bg-[#fdf2e8] text-[#d07a28] ring-[#f2dfcb]',
  slate: 'bg-[#eef1f4] text-[#596579] ring-[#dce2e8]',
};

const badgeClasses: Record<DashboardCardItem['accent'], string> = {
  blue: 'bg-[#f9efe8] text-[#f97a4b]',
  green: 'bg-[#eef6f5] text-[#2f7d81]',
  amber: 'bg-[#fff3e4] text-[#d07a28]',
  slate: 'bg-[#f2f4f7] text-[#596579]',
};

function CardBody({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className="flex h-full flex-col rounded-[30px] border border-[#ece7dd] bg-white p-6 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_48px_-30px_rgba(15,23,42,0.4)]">
      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${accentClasses[item.accent]}`}>
        <Icon size={24} />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
        {item.badge && (
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeClasses[item.accent]}`}>
            {item.badge}
          </span>
        )}
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <span>{item.ctaLabel}</span>
        {item.external ? <ArrowUpRight size={16} /> : <MoveRight size={16} />}
      </div>
    </div>
  );
}

export const DashboardCard: React.FC<Props> = ({ item }) => {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardBody item={item} />
      </a>
    );
  }

  return (
    <Link to={item.href} className="block h-full">
      <CardBody item={item} />
    </Link>
  );
};
