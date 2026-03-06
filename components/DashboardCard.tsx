import React from 'react';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardCardItem } from '../types';

interface Props {
  item: DashboardCardItem;
}

const iconAccentClasses: Record<DashboardCardItem['accent'], string> = {
  blue: 'bg-sky-100 text-sky-700',
  green: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  slate: 'bg-slate-100 text-slate-700',
};

function CardBody({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className="flex h-full flex-col rounded-[28px] border border-white/70 bg-white/92 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_68px_-36px_rgba(15,23,42,0.36)]">
      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${iconAccentClasses[item.accent]}`}>
        <Icon size={24} />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
        {item.badge && (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
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
